module.exports = Chaplin.Collection.extend({
    url: function() {
        return '/eventLogs/' + this.eventId;
    }
});