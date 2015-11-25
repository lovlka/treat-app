module.exports = function(match){
   match('', 'login#show');
   match('main', 'main#show');
   match('main/map', 'main#map');
   match('event/:id', 'event#show');
   match('host', 'host#show');
   match('host/create', 'host#create');
   match('user', 'user#show');
   match('user/edit', 'user#edit');
   match(':args', 'login#show');
};
