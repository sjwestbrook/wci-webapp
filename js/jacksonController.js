routerApp.controller('jacksonController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.jackson = [
        {
            name: 'Lisa Sheffield',
            title: 'Outreach Coordinator',
            phone: '608-498-0772',
            email: 'sheffieldl@workforceconnections.org'
        },
        
        {
            name: 'Kristin Bell',
            title: 'Employment Coordinator - W2/FSET',
            phone: '715-284-7990',
            email: 'bellk@workforceconnections.org'
        },
        
        {
            name: 'Pam Taylor',
            title: 'Employment Coordinator - WIOA',
            phone: '715-284-7117',
            email: 'taylorp@workforceconnections.org'
        }        
    ];    
});
