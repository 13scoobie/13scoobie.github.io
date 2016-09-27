var app = angular.module("leftHandNav", []);
app.controller("leftNavController", function($scope) {
    $scope.navigation = [
        {title: "LinkedIn", href: "https://www.linkedin.com/pub/david-white/41/511/7b8/", description: ""},
        {title: "GitHub", href: "https://github.com/13scoobie", description: ""},
        {title: "Stack Overflow", href: "http://stackoverflow.com/users/3565567/user3565567", description: ""},
        {title: "Website", href: "http://13scoobie.github.io/", description: ""},
        {title: "Blog", href: "http://13scoobie.github.io/blog/", description: ""}
    ];
});

app.controller("rightHandController", function($scope) {
    $scope.rightContent = [
        {title: "First Blog Post", href: "pages/09052016-first-blog-post.html", description:  "First Blog post - description to come later (in progress)", publishdate: "09/05/2016"},
        {title: "Second Blog Post", href: "pages/09052016-fix-static-site.html", description:  "Things i need to change to this website", publishdate: "09/05/2016"},
        {title: "The Plan...", href: "pages/09262016-the-plan.html", description: "I plan to read 1 book a week and make atleast 1 commit a day to this blog", publishdate: "09/26/2016"}
        ];
});
