routerApp.controller('monroeController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.monroe = [
        {
            name: 'Melissa Hansen',
            title: 'Employment Coordinator - W2/FSET',
            phone: '608-433-2783',
            email: 'hansenm@workforceconnections.org'
        },
        
        {
            name: 'Sadie Schultz',
            title: 'Employment Coordinator - FSET',
            phone: '785-7740-2769',
            email: 'schultzs@workforceconnections.org'
        }
    ];    
});
