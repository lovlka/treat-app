var EventItemView = require('views/host/event-item-view');

module.exports = Chaplin.CollectionView.extend({
   noWrap: true,
   autoRender: true,
   itemView: EventItemView,
   container: '#main-region',
   listSelector: '#events',
   animationDuration: 0,

   initialize: function() {
      this.template = require('views/host/events');
      Chaplin.CollectionView.prototype.initialize.call(this, arguments);
   },

   getTemplateFunction: function() {
      return this.template;
   },

   getTemplateData: function() {
      return this.model.attributes;
   }
});