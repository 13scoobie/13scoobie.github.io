var app = angular.module("leftHandNav", []);
app.controller("leftNavController", function($scope) {
    $scope.navigation = [
        {title: "1", href: "test3.html", description: "1"},
        {title: "2", href: "test.html", description: "2"},
        {title: "3", href: "test2.html", description: "3"}
    ];
});

app.controller("rightHandController", function($scope) {
    $scope.rightContent = [
        {title: "1", href: "test.html", description:  "test description 1"},
        {title: "2", href: "test.html",  description: "test description 2"},
        {title: "3", href: "test.html",  description: "test description 3"},
        {title: "4", href: "test.html",  description: "test description 4"},
        {title: "5", href: "http.html",  description: "test description 5"},
        {title: "6", href: "http.html",  description: "test description 6"},
        {title: "7", href: "http.html",  description: "test description 7"}
    ];
});