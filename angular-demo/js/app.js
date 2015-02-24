var app = angular.module("leftHandNav", []);
app.controller("leftNavController", function($scope) {
    $scope.navigation = [
        {title: "LinkedIn", href: "https://www.linkedin.com/pub/david-white/41/511/7b8/", description: ""},
        {title: "GitHub", href: "https://github.com/13scoobie", description: ""},
        {title: "Stack Overflow", href: "http://stackoverflow.com/users/3565567/user3565567", description: ""},
        {title: "Website", href: "http://13scoobie.github.io/", description: ""},
        {title: "Blog", href: "http://13scoobie.github.io/poole/", description: ""}
    ];
});

app.controller("rightHandController", function($scope) {
    $scope.rightContent = [
        {title: "Project Euler", href: "#", description:  "test description 1"},
        {title: "Hacker Rank", href: "#",  description: "test description 2"},
        {title: "Over the Wire", href: "#",  description: "test description 3"},
        {title: "Unity Game Development (tbd)", href: "#",  description: "test description 6"},
        {title: "Windows Phone Development (tbd)", href: "#",  description: "test description 7"},
        {title: "Windows 10 Development (tbd)", href: "#",  description: "test description 7"},
        {title: "Android Development (tbd)", href: "#",  description: "test description 7"},
        {title: "iOS Development (tbd)", href: "#",  description: "test description 7"},
        {title: "Movies (tbd)", href: "#",  description: "test description 4"},
        {title: "Xbox Games (tbd)", href: "#",  description: "test description 5"},
        {title: "Apps I Use", href: "#",  description: "test description 4"},
        {title: "Blogs I Read", href: "#",  description: "test description 5"}
    ];
});