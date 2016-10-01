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
    {title: "Challenges", href: "/challenges/", description: "Solutions to code challenges from sites such as Hackerrank and Codingame"},
    {title: "Projects", href: "/projects/", description: "Information, projects and code solutions in various languages of problems I solved"},
    {title: "Tutorials", href: "/tutorials/", description: "Tutorials for languages i learn/use and want to share with others"},
  ];
});
