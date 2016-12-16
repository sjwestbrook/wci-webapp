routerApp.controller('juneauController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.juneau = [
        {
            name: 'Sandy Turner',
            title: 'Employment Coordinator',
            phone: '608-790-8137',
            email: 'turners@workforceconnections.org'
        },
        
        {
            name: 'Teri Stainbrook',
            title: 'Outreach Coordinator - FSET',
            phone: '608-847-4899',
            email: 'steinbrookt@workforceconnections.org'
        }
    ];    
});
