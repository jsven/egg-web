'use strict';

module.exports = app => {
  app.redirect('/', '/public/index.html');
  app.router.get('/home', 'home.render');
};
