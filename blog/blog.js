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
        {title: "First Blog Post", href: "pages/09052016-first-blog-post.html", description:  "First Blog post - description to come later (in progress)", publishdate: "09/05/2016 20:00:00"},
        {title: "Second Blog Post", href: "pages/09052016-fix-static-site.html", description:  "Things i need to change to this website", publishdate: "09/05/2016 20:05:00"},
        {title: "The Plan...", href: "pages/09262016-the-plan.html", description: "I plan to read 1 book a week and make atleast 1 commit a day to this blog", publishdate: "09/26/2016 20:01:50"},
        {title: "The New Plan...", href: "pages/09272016-new-plan.html", description: "Changing to one book a month, and adding 1 language a month", publishdate: "09/27/2016 21:06:30"},
        {title: "The First Book", href: "pages/09282016-first-book.html", description: "Started my first book, 'Pragmatic Programmer from Journeyman to Master', so far, so good.", publishdate: "09/28/2016 20:26:00"}
        ];
});
