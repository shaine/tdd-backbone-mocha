(function(global, $, _, Backbone, undefined) {

    app.views.Profile = Backbone.View.extend({
        render: function() {
            var html = '<h1>' + this.model.getFullName() + '</h1>' +
                '<p>'+ this.model.get('firstName') + ' is ' + this.model.get('age') + ' years old.</p>';

            this.$el.html(html);
        }
    });

})(this, $, _, Backbone);
