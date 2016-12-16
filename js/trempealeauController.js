routerApp.controller('trempealeauController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.trempealeau = [
        {
            name: 'Autumn Bergerson',
            title: 'Employment Coordinator - W2/FSET',
            phone: '608-790-2380',
            email: 'bergersona@workforceconnections.org'
        },
        
        {
            name: 'Pam Taylor',
            title: 'Employment Coordinator -WIOA',
            phone: '608-433-2777',
            email: 'taylorp@workforceconnections.org'
        }
    ];    
});
