routerApp.controller('lacrosseController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.lacrosse = [
        {
            name: 'Pamela Amundson',
            title: 'Finance Manager - FiscalT',
            phone: '608-789-5640',
            email: 'amundsonp@workforceconnections.org'
        },
        
        {
            name: 'Andrea Brownlee',
            title: 'Employment Coordinator - W2',
            phone: '608-789-5646',
            email: 'brownleea@workforceconnections.org'
        }
    ];    
});
