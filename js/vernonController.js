routerApp.controller('vernonController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.vernon = [
        {
            name: 'Katy Paczkowski',
            title: 'Employment Coordinator - W2/FSET',
            phone: '608-433-2768',
            email: 'paczkowskik@workforceconnections.org'
        },
        {
            name: 'Tyler Diktanas',
            title: 'Employment Coordinator - WIOA, W2/FSET',
            phone: '608-433-2775',
            email: 'diktanast@workforceconnections.org'
        }
    ];    
});
