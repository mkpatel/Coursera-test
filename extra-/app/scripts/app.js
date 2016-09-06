'use strict';


angular.module('mainApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      /*route for the Main Pagw*/
    .state('app',{

      url:'/',
      views:{

        'header':{
            templateUrl: 'views/header.html' /*header view*/
        },
        'content':{

          templateUrl:'views/content.html',
          controller:'bookController'
        },
        'footer':{ 
          templateUrl:'views/footer.html'  /*footer view*/
        }

      }

    })

    /*Add New Book*/

    .state('app.newBook', {
                url:'newBook',
                views: {
                    'content@': {
                        templateUrl: 'views/newBook.html'
                   }
                }
            })

    /*Add new Author*/
    .state('app.newAuthor', {
                url:'newAuthor',
                views: {
                    'content@': {
                        templateUrl: 'views/newAuthor.html'
                   }
                }
            });

    $urlRouterProvider.otherwise('/');

});        


