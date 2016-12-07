routerApp.controller('staffController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.staff = [
        {
//             image: ,
            name: 'Pamela Amundson',
            title: 'Financial Manager - Fiscal',
            location: 'La Crosse County',
            phone: '608-789-5640',
            email: 'amundsonp@workforceconnections.org'   
        },
        {
//             image: ,
            name: 'Carla Anderson',
            title: 'Employment Resource Coordiator',
            location: 'Monroe County',
            phone: '608-374-7740',
            email: 'andersonc@workforceconnections.org'
        },
        {
//             image: ,
            name: 'Kristin Bell',
            title: 'Employment Coordinator - W2/FSET',
            location: 'Jackson County',
            phone: '715-284-7990',
            email: 'bellk@workforceconnections.org'
        },
        {
//             image: ,
            name: 'Autumn Bergerson',
            title: 'Employment Coordinator - W2/FSET',
            location: 'Trempealeau, Buffalo, Pepin Counties',
            phone: '608-790-2380',
            email: 'bergersona@workforceconnections.org'
        }
    ];
    
});
