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
      {title: "Ace Editor", href: "/projects/ace/", description: ""},
      {title: "Apps I Use", href: "/projects/AppsIUse.html", description: "List of apps and descriptions of why i use the apps i do"},
      {title: "Movies", href: "/projects/Movies.html", description: "Movie reviews of movies ive watched lately"},
      {title: "Squares Theme", href: "/projects/squares.html", description: ""},
    ];
});
