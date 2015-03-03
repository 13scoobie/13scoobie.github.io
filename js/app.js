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
        {title: "Project Euler", href: "#", description:  "Information, projects and code solutions in various languages of problems I solved from ProjectEuler"},
        {title: "Hacker Rank", href: "#",  description: "My HackerRank profile, as well as links to code samples of 'hacks' i have completed"},
        {title: "Over the Wire", href: "#",  description: "Solutions to solved problems from Over the Wire"},
        {title: "Unity Game Development (tbd)", href: "#",  description: "Page containing links to my published unity projects for web."},
        {title: "Windows Phone Development (tbd)", href: "#",  description: "Future page will contain links to download published Windows Phone Apps (8.1 & 10)"},
        {title: "Windows 10 Development (tbd)", href: "#",  description: "Blog-like page describing anything i learn while navigating through Windows 10 Technical Preview"},
        {title: "Android Development (tbd)", href: "#",  description: "Future page will contain links to download published Android apps (tablet & phone)"},
        {title: "iOS Development (tbd)", href: "#",  description: "Future page will contain links to download published iPhone/iPad apps"},
        {title: "Movies (tbd)", href: "#",  description: "Movie reviews of movies ive watched lately"},
        {title: "Xbox Games (tbd)", href: "#",  description: "My little section to list xbox games, achievements, and maybe one day a twitch feed or something"},
        {title: "Apps I Use", href: "#",  description: "List of apps and descriptions of why i use the apps i do"},
        {title: "Blogs I Read", href: "#",  description: "Links to blogs with information i find cool or useful"}
    ];
});