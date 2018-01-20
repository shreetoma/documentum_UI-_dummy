var app = angular.module('myApp',['ngStorage','ngMessages','ui.router']);
app.controller('myController',function($scope,$location, $localStorage){
    $scope.signIn= function(){
        
          $localStorage.uname=$scope.user;
            location.href="/homePage.html";
        //$location.url=('/homePage.html');
            //$cookies.get('element3');
        
       
    }
        
})
app.controller('myController2',function($scope, $localStorage, $window,$http){
   $scope.userName =$localStorage.uname;
    //alert("hello");
    
    function myFnc(){
        
        
    $http({
        url:'assets/json/data.JSON',
        method:'GET',
        headers:{'Content-Type':'application/json'}
        
    })
        
                .then(function (jsonData) {
                   console.log(jsonData);
        $scope.table=jsonData.data;
                })
                

    }
    myFnc();
    
    
})
app.config(function($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/home-view');
    $stateProvider
    .state('home-view',{
           url:'/home-view',
        templateUrl: 'view/home-page-view.html'
        
    })
    .state('search-view',{
           url:'/search-view',
        templateUrl: 'view/search-view.html'
        
    })
    
    
})
