

routerApp.controller('newsController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.news = [

        {
            image: './images/',
            title: 'Receiving a Second Chance',
            link: 'http://lacrossetribune.com/news/local/volunteer-mentors-key-to-second-chances-program/article_9ed4dfe3-ae95-578d-bc60-c3dbde4d415b.html'
        },
        {
            image: './images/',
            title: 'Best in Class Award Received',
            link: './pdf/'
        },
        {
            image: './images/',
            title: 'WCI Recognized by White House',
            link: './pdf/'
        },
        {
            image: './images/',
            title: 'Governor Commends FSET Partnership',
            link: './pdf/'
        }
        
    ];
    
});
