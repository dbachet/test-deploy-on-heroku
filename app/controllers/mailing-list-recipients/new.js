import Ember from "ember";

export default Ember.ObjectController.extend({
  errors: Ember.computed.alias("model.errors"),

  serverError: null,

  hasErrors: Ember.computed.notEmpty("errors"),

  hasSucceeded: false,

  formattedErrors: function() {
    var self = this;
    return self.get("errors").map(
      function(error) {
        return self.get("formattedErrorAttribute") + error.message;
      }
    );
  }.property("errors"),

  formattedErrorAttribute: function() {
    return "L'email ";
  }.property(""),

  actions: {
    cleanEmailField: function() {
      Ember.$("#email").val("");
      Ember.$("#email").focus();
    }
  }
});