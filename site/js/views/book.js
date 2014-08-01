var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    events: {
        'click .delete': 'deleteBook'
    },
    deleteBook: function() {
        this.model.destroy();
        this.remove();
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