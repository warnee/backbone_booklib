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

        var editData = {};
        editData.title = $('.editMode[data-id="' + this.model.id + '"] .title').val();
        editData.author = $('.editMode[data-id="' + this.model.id + '"] .author').val();
        editData.releaseDate = $('.editMode[data-id="' + this.model.id + '"] .releaseDate').val();
        editData.keywords = $('.editMode[data-id="' + this.model.id + '"] .keywords').val();

        this.model.save(editData); // 저장
        this.render(); // model 재 설정
        //this.update();
        $('.viewMode[data-id="' + this.model.id + '"]').show();
        $('.editMode[data-id="' + this.model.id + '"]').hide();
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