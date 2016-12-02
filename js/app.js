var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATE ========================================
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html'
        })
        
            // nested list with custom controller
//         .state('home.list', {
//             url: '/list',
//             templateUrl: './partials/partial-home-list.html',
//             controller: function($scope) {
//                 $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//             }
//         })
        
//         // nested list with just some random string data
//         .state('home.paragraph', {
//             url: '/paragraph',
//             template: 'I could sure use a drink right now.'
//         })
        
      
    
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: './partials/about.html' },
//                 'columnOne@about': { template: 'Look I am a column!' },
//                 'columnTwo@about': { 
//                     templateUrl: './partials/table-data.html',
//                     controller: 'scotchController'
//                 }
            }            
        })
    
    
    
        .state('404', {
            url: '/404',
            templateUrl: './partials/404.html'
        })
    
    
        .state('aca', {
            url: '/aca',
            templateUrl: './partials/aca.html'
        })
    
    
        
        // BOARD STATE AND NESTED VIEW ========================================
        .state('board', {
            url: '/board',
            templateUrl: './partials/board.html'
        })    
        .state('board.agendas-minutes', {
            url: '/agendas-minutes',
            templateUrl: './partials/agendas-minutes.html',
//             controller: function($scope) {
//                 $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//             }
        })
    
    
       .state('business-solutions', {
            url: '/business-solutions',
            templateUrl: './partials/business-solutions.html'
        })
    
        .state('careers', {
            url: '/careers',
            templateUrl: './partials/careers.html'
        })
    
        .state('children-first', {
            url: '/children-first',
            templateUrl: './partials/children-first.html'
        })
    
        .state('community-resources', {
            url: '/community-resources',
            templateUrl: './partials/community-resources.html'
        })
    
        .state('history', {
            url: '/history',
            templateUrl: './partials/history.html'
        })
    
        .state('county-resources', {
            url: '/county-resources',
            templateUrl: './partials/county-resources.html'
        })
    
        .state('crawford', {
            url: '/crawford',
            templateUrl: './partials/crawford.html'
        })
    
       .state('emergency-assistance', {
            url: '/emergency-assistance',
            templateUrl: './partials/emergency-assistance.html'
        })
    
        .state('executive-director', {
            url: '/executive-director',
            templateUrl: './partials/executive-director.html'
        })
    
      .state('fset', {
            url: '/fset',
            templateUrl: './partials/fset.html'
        })
    
       .state('jackson', {
            url: '/jackson',
            templateUrl: './partials/jackson.html'
        })
    
       .state('job-search-resources', {
            url: '/job-search-resources',
            templateUrl: './partials/job-search-resources.html'
        })
    
       .state('job-seeker', {
            url: '/job-seeker',
            templateUrl: './partials/job-seeker.html'
        })
    
        .state('juneau', {
            url: '/juneau',
            templateUrl: './partials/juneau.html'
        })
    
        .state('lacrosse', {
            url: '/lacrosse',
            templateUrl: './partials/lacrosse.html'
        })
    
    
       .state('locations', {
            url: '/locations',
            templateUrl: './partials/locations.html'
        })
    
       .state('mission', {
            url: '/mission',
            templateUrl: './partials/mission.html'
        })
    
       .state('monroe', {
            url: '/monroe',
            templateUrl: './partials/monroe.html'
        })
    
       .state('pepin', {
            url: '/pepin',
            templateUrl: './partials/pepin.html'
        })
    
       .state('reports', {
            url: '/reports',
            templateUrl: './partials/reports.html'
        })
    
        .state('resources', {
            url: '/resources',
            templateUrl: './partials/resources.html'
        })
    
        .state('second-chances', {
            url: '/second-chances',
            templateUrl: './partials/second-chances.html'
        })
    
       .state('staff', {
            url: '/staff',
            templateUrl: './partials/staff.html'
        })
    
        .state('success-stories', {
            url: '/success-stories',
            templateUrl: './partials/success-stories.html'
        })
    
        .state('transportation-connections', {
            url: '/transportation-connections',
            templateUrl: './partials/transportation-connections.html'
        })
     
        .state('trempealeau', {
            url: '/trempealeau',
            templateUrl: './partials/trempealeau.html'
        })
    
      .state('vernon', {
            url: '/vernon',
            templateUrl: './partials/vernon.html'
        })
    
        .state('volunteer', {
             url: '/volunteer',
            templateUrl: './partials/volunteer.html'
        })
    
        .state('volunteers', {
            url: '/volunteers',
            templateUrl: './partials/volunteers.html'
        })
    
    
        .state('w2-resources', {
             url: '/w2-resources',
            templateUrl: './partials/w2-resources.html'
        })
    
        .state('w2', {
             url: '/w2',
            templateUrl: './partials/w2.html'
        })
    
        .state('w2w', {
             url: '/w2w',
            templateUrl: './partials/w2w.html'
        })
    
        .state('wioa-resources', {
             url: '/wioa-resources',
            templateUrl: './partials/wioa-resources.html'
        })
    
       .state('wioa', {
             url: '/wioa',
            templateUrl: './partials/wioa.html'
        })
    
        .state('wise', {
             url: '/wise',
            templateUrl: './partials/wise.html'
        });
    
});

// routerApp.controller('scotchController', function($scope) {
    
//     $scope.message = 'test';
   
//     $scope.scotches = [
//         {
//             name: 'Macallan 12',
//             price: 50
//         },
//         {
//             name: 'Chivas Regal Royal Salute',
//             price: 10000
//         },
//         {
//             name: 'Glenfiddich 1937',
//             price: 20000
//         }
//     ];
    
// });
