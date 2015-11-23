var Application = require('application');

$(function () {
   $.ajaxSetup({
      beforeSend: function(jqXHR) {
         if(window.location.hostname === 'localhost') {
            this.url = 'http://localhost:56439/api' + this.url;
         }
      }
   });

    Handlebars.registerHelper('date', function(date, format) {
        return moment(date).format(format);
    });

   new Application({
         title: 'Treat',
         controllerSuffix: '-controller',
         routes: require('routes')
      }
   );
});
