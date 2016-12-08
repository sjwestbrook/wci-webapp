
routerApp.controller('boardController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.board = [

        {
            name: 'Ann Boland',
            role: 'Chair',
            company: 'Ingersoll Rand',
            title: 'Director, Service Delivery and Relationship Management'
        },
        {
            name: 'David Ring',
            role: 'Vice-Chair',
            company: 'KwikTrip Inc.',
            title: 'Community Relations Coordinator'
        },
        {
            name: 'Kevin Zagrodnick',
            role: 'Secretary/Treasurer',
            company: 'River City Bank',
            title: 'Assistant Vice President'
        },
        {
            name: 'Kurt Bear',
            role: 'Director',
            company: 'MidCity Steel',
            title: 'President/CEO'
        },
        {
            name: 'Anne Hlavacka',
            role: 'Director',
            company: 'Small Business Development Center',
            title: 'Director'
        },
        {
            name: 'Karen Long',
            role: 'Director',
            company: 'Organic Valley/CROPP Cooperative',
            title: 'Employee Culture and Communications Manager'
        },
        {
            name: 'Angela Menezes',
            role: 'Director',
            company: 'Logistics Health Incorporated',
            title: 'Human Capital Consultant'
        },
        {
            name: 'Tim Vondrasek',
            role: 'Director',
            company: 'Norwinn Company',
            title: 'General Manager'
        },
        {
            name: 'Neil Kamrowski',
            role: 'Director',
            company: 'International Assoc of Machinists and Aerospace Workers',
            title: 'President'
        },
         {
            name: 'Tim Vondrasek',
            role: 'Director',
            company: 'Norwinn Company',
            title: 'General Manager'
         },        
         {
            name: 'Dimitar Dzikov',
            role: 'Director',
            company: 'Coulee Bank',
            title: 'Business Banking Officer'
        }
    ];
    
});
