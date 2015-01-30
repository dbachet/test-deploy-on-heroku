import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    create: function() {
      var self = this;
      var post = self.store.createRecord("post",
      {
        content: this.controller.get('content')
      });

      self.controller.set('model', post);

      post.save().then(function(response){
        alert('Post creation has succeeded');
      }, function(response) {
        alert('Post creation has failed');
      });
    }
  }
});
