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
            views: {
                '': { 
                    templateUrl: './partials/board.html' 
                },
                'boardMembers@board': { 
                    templateUrl: './partials/board-list.html',
                    controller: 'boardController'
                }
            }
        })
    
    
        .state('board.agendas-minutes', {
            url: '/agendas-minutes',
            templateUrl: './partials/agendas-minutes.html',
//             controller: function($scope) {
//                 $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//             }
        })
        
        .state('buffalo', {
            url: '/buffalo',
            views: {
                '': { 
                    templateUrl: './partials/buffalo.html' 
                },
                'buffaloStaff@buffalo': { 
                    templateUrl: './partials/buffalo-staff.html',
                    controller: 'buffaloController'
                }
            }
        })
     
       .state('business-solutions', {
            url: '/business-solutions',
            templateUrl: './partials/business-solutions.html'
        })
    
        .state('careers', {
            url: '/careers',
            templateUrl: './partials/careers.html'
        })
    
        .state('application', {
            url: '/application',
            templateUrl: './partials/application.html'
        })
    
        .state('children-first', {
            url: '/children-first',
            templateUrl: './partials/children-first.html'
        })
    
        .state('community-resources', {
            url: '/community-resources',
            templateUrl: './partials/community-resources.html'
        })     
    
        .state('county-resources', {
            url: '/county-resources',
            templateUrl: './partials/county-resources.html'
        })
    
        .state('crawford', {
            url: '/crawford',
            views: {
                '': { 
                    templateUrl: './partials/crawford.html' 
                },
                'crawfordStaff@crawford': { 
                    templateUrl: './partials/crawford-staff.html',
                    controller: 'crawfordController'
                }
            }
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
    
      .state('history', {
            url: '/history',
            templateUrl: './partials/history.html'
        })
        
       .state('jackson', {
            url: '/jackson',
            views: {
                '': { 
                    templateUrl: './partials/jackson.html' 
                },
                'jacksonStaff@jackson': { 
                    templateUrl: './partials/jackson-staff.html',
                    controller: 'jacksonController'
                }
            }
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
            views: {
                '': { 
                    templateUrl: './partials/juneau.html' 
                },
                'juneauStaff@juneau': { 
                    templateUrl: './partials/juneau-staff.html',
                    controller: 'juneauController'
                }
            }
        })
    
        .state('lacrosse', {
            url: '/lacrosse',
            views: {
                '': { 
                    templateUrl: './partials/lacrosse.html' 
                },
                'lacrosseStaff@lacrosse': { 
                    templateUrl: './partials/lacrosse-staff.html',
                    controller: 'lacrosseController'
                }
            }
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
            views: {
                '': { 
                    templateUrl: './partials/monroe.html' 
                },
                'monroeStaff@monroe': { 
                    templateUrl: './partials/monroe-staff.html',
                    controller: 'monroeController'
                }
            }
        })
    
        .state('news', {
            url: '/news',
            views: {
                '': { 
                    templateUrl: './partials/news.html' 
                },
                'newsController@news': { 
                    templateUrl: './partials/news-list.html',
                    controller: 'newsController'
                }
            }
        })
    
        .state('pepin', {
            url: '/pepin',
            views: {
                '': { 
                    templateUrl: './partials/pepin.html' 
                },
                'pepinStaff@pepin': { 
                    templateUrl: './partials/pepin-staff.html',
                    controller: 'pepinController'
                }
            }
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
      
        .state('request-services', {
            url: '/request-services',
            templateUrl: './partials/request-services.html'
        })
    
       .state('staff', {
            url: '/staff',
            views: {
                '': { 
                    templateUrl: './partials/staff.html' 
                },
                'columnOne@staff': { 
                    templateUrl: './partials/staff-list.html',
                    controller: 'staffController'
                }
            }
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
            views: {
                '': { 
                    templateUrl: './partials/trempealeau.html' 
                },
                'trempealeauStaff@trempealeau': { 
                    templateUrl: './partials/trempealeau-staff.html',
                    controller: 'trempealeauController'
                }
            }
        })
    
        .state('vernon', {
            url: '/vernon',
            views: {
                '': { 
                    templateUrl: './partials/vernon.html' 
                },
                'vernonStaff@vernon': { 
                    templateUrl: './partials/vernon-staff.html',
                    controller: 'vernonController'
                }
            }
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
