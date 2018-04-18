var app = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ngDraggable', 'ngDropdownByYu', 'ngclipboard']);

app.controller('myCtrl', function ($scope, $http, $rootScope) {
    $http.get("Data/tableData.json")
        .then(function (response) {
            $scope.name = response.data.items;
        });

    $scope.removeItem = function (x) {

        $scope.name.splice(x, 1);
    }
    $scope.sort = function (keyname) {
        $scope.sortBy = keyname;
        $scope.reverse = !$scope.reverse;
    }

    $scope.selectTableRow = function (index, id, flag) {

        if (flag == true)
            $scope.activeRow = id;
        else
            $scope.activeRow = -1;

    }
    $scope.draggedStyle = {
        top: '96px',
        right: '90px'
    };
    $scope.edit = function (k, y, $event) {
        $scope.m = y;
        $scope.editing = true;
        angular.extend($scope.x = k);
        $scope.edit = false;
        $event.stopPropagation();
    }
    $scope.save = function (index) {
        $scope.edit = {};
        $scope.editing = false;
        $scope.m = index;

    }

    $scope.selectedRow = -1;
    $rootScope.selectedPerson = null;
    $scope.selectClicked = function (x, index) {
        $scope.selectedRow = index;
    }
    $scope.insert = function () {
        $scope.add = true;
        $scope.name.push($scope.addMe);
        $scope.dispaly = true;
    }
    $scope.save1 = function () {
        $scope.active = true;
    }

});
