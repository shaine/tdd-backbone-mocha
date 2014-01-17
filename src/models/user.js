(function(global, _, Backbone, undefined) {

    app.models.User = Backbone.Model.extend({

        getFullName: function() {
            return this.get('firstName') + ' ' + this.get('lastName');
        }

    });

})(this, _, Backbone);
