var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function ($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.addMe) {return;}
    if ($scope.products.indexOf($scope.addMe) == -1) {
      $scope.products.push($scope.addMe);
      $scope.addMe = "";
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function (itemId) {
    $scope.errortext = "";
    $scope.products.splice(itemId, 1);
  }
});