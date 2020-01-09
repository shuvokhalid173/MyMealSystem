angular.module('myapp', []).controller('mycontroller', function ($scope) {
    let one = { id: 1, name: 'ak' };
    let two = { id: 2, name: 'dui' };
    let three = { id: 3, name: 'tin' };

    $scope.arr = [one, two, three];

    $scope.goo = function (id) {
        console.log(id);
        $scope.curr_item = id;
    }
}); 