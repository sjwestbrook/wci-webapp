
routerApp.controller('staffController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.staff = [

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
            title: 'Owner/CEO'
        },
        {
            name: '',
            role: 'Director',
            company: '',
            title: ''
        },
        {
            name: '',
            role: 'Director',
            company: '',
            title: ''
        },
        {
            name: '',
            role: 'Director',
            company: '',
            title: ''
        },
        {
            name: '',
            role: 'Director',
            company: '',
            title: ''
        },
        {
            name: '',
            role: 'Director',
            company: '',
            title: ''
        }
    ];
    
});
