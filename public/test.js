var app = angular.module('myapp', []); 
app.controller('mycontroller', function ($scope, $http) {
    $scope.mealEvent = {}; // sign up 
    $scope.mealEventProfile = {};  // log in 
    $scope.hiddenMemberNames = true;
    console.log($scope.mealEvent.password)
    $scope.goo = function () {
        if ($scope.mealEvent.numberOfMember) {
            $scope.hiddenMemberNames = false;
        }
    } 

    $scope.getNumber = function () {
        let arr = [] ; 
        for (let i = 0; i < $scope.mealEvent.numberOfMember; i++) {
            arr.push(i + 1); 
        }
        return arr;
    }

    $scope.onSubmitSignUp = function (mealEvent) {
        console.log(mealEvent);
        $http({
            method: 'POST', 
            url: '/signup', 
            data: mealEvent
        }).then((res) => {
            console.log(res.data); 
        })
    }

    $scope.onSubmitLogIn = function () {
        console.log($scope.mealEventProfile); 
    }
    
}); 

app.directive("compareTo", function () {
    return {
        require: "ngModel",
        scope:{
            repeatPassword: "=compareTo"
        },
        link: function (scope, element, attributes, paramval) {
            paramval.$validators.compareTo = function (val) {
                return val == scope.repeatPassword;
            };
            scope.$watch("repeatPassword", function () {
                paramval.$validate();
            });
        }
    };
});