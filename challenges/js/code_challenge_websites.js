var app = angular.module("leftHandNav", []);
app.controller("leftNavController", function($scope) {
    $scope.navigation = [
        {title: "LinkedIn", href: "https://www.linkedin.com/pub/david-white/41/511/7b8/", description: ""},
        {title: "GitHub", href: "https://github.com/13scoobie", description: ""},
        {title: "Twitter", href: "https://twitter.com/13scoobie", description: ""},
        {title: "Stack Overflow", href: "http://stackoverflow.com/users/3565567/user3565567", description: ""},
        {title: "Website", href: "http://13scoobie.github.io/", description: ""},
        {title: "Blog", href: "http://13scoobie.github.io/blog/", description: ""}
    ];
});

app.controller("rightHandController", function($scope) {
    $scope.rightContent = [
        {title: "Project Euler", href: "../sub-pages/ProjectEuler.html", description: "Project Euler Solutions"},
        {title: "Codingame", href: "../sub-pages/Codingame.html", description: "Codingame Solutions"},
        {title: "Hackerrank", href: "../sub-pages/Hackerrank.html", description: "Hackerrank Solutions"},
        {title: "Codewars", href: "../sub-pages/Codewars.html", description: "Code Wars Solutions"},
        {title: "Excercism IO", href: "../sub-pages/Excercismio.html", description: "Excercism.io Solutions"},
    ];
});
