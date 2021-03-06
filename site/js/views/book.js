var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    events: {
        'click .delete': 'deleteBook',
        'click .edit': 'editBook',
        'click .save': 'saveBook',
        'click .cancel': 'cancelBook'
    },
    deleteBook: function() {
        this.model.destroy(); // 화면상의 삭제
        this.remove(); // 실제 삭제
    },
    editBook: function() {
        $('.viewMode[data-id="' + this.model.id + '"]').hide();
        $('.editMode[data-id="' + this.model.id + '"]').show();
    },
    saveBook: function() {

        var editMode = $('.editMode[data-id="' + this.model.id + '"]');

        var editData = {};
        editData.title = editMode.find('.title').val();
        editData.author = editMode.find('.author').val();
        editData.releaseDate = editMode.find('.releaseDate').val();
        editData.keywords = editMode.find('.keywords').val();

        this.model.save(editData); // 저장
        this.render(); // model 재 설정
        //this.update();
        $('.viewMode[data-id="' + this.model.id + '"]').show();
        editMode.hide();
    },
    cancelBook: function() {
        $('.viewMode[data-id="' + this.model.id + '"]').show();
        $('.editMode[data-id="' + this.model.id + '"]').hide();
    },
    //template: _.template( $('#bookTemplate').html() ),
    template: Hogan.compile($("#bookTemplate").html()),
    render: function () {
        //this.$el.html( this.template(this.model.toJSON()) );
       // this.$el.html( 'hello world' );
       this.$el.html(this.template.render(this.model.toJSON()));

        return this;
    }
});