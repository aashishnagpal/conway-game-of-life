var app = angular.module('app');
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home-view.html'
    })
    .state('grid', {
      url: '/grid',
      templateUrl: 'views/grid-view.html'
    });
  $urlRouterProvider.otherwise('/');
}]);