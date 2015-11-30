var Application = require('application');
var Auth = require('utils/auth');
var Url = require('utils/url');

$(function () {
   Auth.initialize();

   $.ajaxSetup({
      beforeSend: function(jqXHR) {
         this.url = Url.prefix(this.url);

         if(Auth.getToken()) {
            jqXHR.setRequestHeader('Authorization', 'Basic ' + Auth.getToken());
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
