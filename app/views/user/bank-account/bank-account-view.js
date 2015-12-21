module.exports = Chaplin.View.extend({
   noWrap: true,
   autoRender: true,
   container: '#main-region',

   initialize: function() {
      this.template = require('./bank-account');
      Chaplin.View.prototype.initialize.call(this, arguments);
   },

   getTemplateFunction: function() {
      return this.template;
   },

   getTemplateData: function() {
      return this.model.attributes;
   }
});