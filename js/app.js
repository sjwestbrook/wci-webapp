var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html'
        }) 
   
        .state('about', {
            url: '/about',
            templateUrl: './partials/about.html'
        })
    
        .state('404', {
            url: '/404',
            templateUrl: './partials/404.html'
        })
    
        .state('aca', {
            url: '/aca',
            templateUrl: './partials/aca.html'
        })

        .state('board', {
            url: '/board',
            templateUrl: './partials/board.html'
        })
     
     .state('buffalo', {
            url: '/buffalo',
            templateUrl: './partials/buffalo.html'
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
            templateUrl: './partials/crawford.html'
        })
       
       .state('emergency-assistance', {
            url: '/emergency-assistance',
            templateUrl: './partials/emergency-assistance.html'
        })
    
        .state('empire-testimonial', {
            url: '/empire-testimonial',
            templateUrl: './partials/empire-testimonial.html'
        })
    
        .state('employee-benefits', {
            url: '/employee-benefits',
            templateUrl: './partials/employee-benefits.html'
        })
    
        .state('employee-testimonials', {
            url: '/employee-testimonials',
            templateUrl: './partials/employee-testimonials.html'
        })
    
        .state('executive-director', {
            url: '/executive-director',
            templateUrl: './partials/executive-director.html'
        })
    
        .state('foster-grandparents', {
            url: '/foster-grandparents',
            templateUrl: './partials/foster-grandparents.html'
        })
    
       .state('fset', {
            url: '/fset',
            templateUrl: './partials/fset.html'
        })
    
        .state('healthcare-impact-stories', {
            url: '/healthcare-impact-stories',
            templateUrl: './partials/healthcare-impact-stories.html'
        })
    
        .state('healthcare-press-release', {
            url: '/healthcare-press-release',
            templateUrl: './partials/healthcare-press-release.html'
        })
    
      .state('history', {
            url: '/history',
            templateUrl: './partials/history.html'
        })
    
        .state('jackson', {
            url: '/jackson',
            templateUrl: './partials/jackson.html'
        })
        
        .state('job-postings', {
            url: '/job-postings',
            templateUrl: './partials/job-postings.html'
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
    
        .state('news', {
            url: '/news',
            templateUrl: './partials/news.html'
        })
      
        .state('pepin', {
            url: '/pepin',
            templateUrl: './partials/pepin.html' 
        })
    
        .state('request-services', {
            url: '/request-services',
            templateUrl: './partials/request-services.html'
        })
    
       .state('reports', {
            url: '/reports',
            templateUrl: './partials/reports.html'
        })
    
        .state('resources', {
            url: '/resources',
            templateUrl: './partials/resources.html'
        })
    
       .state('staff', {
            url: '/staff',
            templateUrl: './partials/staff.html'
        })
    
        .state('impact-stories', {
            url: '/impact-stories',
            templateUrl: './partials/impact-stories.html'
        })
    
        .state('impact-stories-archive', {
            url: '/impact-stories-archive',
            templateUrl: './partials/impact-stories-archive.html'
        })
        
        .state('trempealeau', {
            url: '/trempealeau',
            templateUrl: './partials/trempealeau.html' 
        })
    
        .state('sitemap', {
            url: '/sitemap',
            templateUrl: './partials/sitemap.html' 
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
