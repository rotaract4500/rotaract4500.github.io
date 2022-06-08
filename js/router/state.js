/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/");

    // Estados
    $stateProvider
      // Home
      .state('home', {
        url: '/',
        title: 'Rotaract 4500 - Página Inicial',
        templateUrl: 'home.html'
      });


  })
