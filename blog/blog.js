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
        {title: "The First Book", href: "pages/09282016-first-book.html", description: "Started my first book, 'Pragmatic Programmer from Journeyman to Master'", publishdate: "09/28/2016 20:26:00"},
        {title: "React & Angular", href: "pages/09292016-react-and-angular.html", description: "Start diving into React and Angular 2.0, write some code in both and see what each has to offer", publishdate: "09/29/2016 20:41:00"},
        {title: "Google Hardware (Pixel/Andromeda)", href: "pages/10032016-google-hardware.html", description: "Google Hardware event tomorrow!", publishdate: "10/03/2016 20:24:00"},
        {title: "Google Pixel Phones", href: "pages/10042016-google-pixel-phones.html", description: "Google Pixel Phones", publishdate: "10/04/2016 20:07:00"},
        {title: "First Challenge", href: "pages/10062016-first-challenge-done.html", description: "First Programming Challenge complete - Left Shift Array", publishdate: "10/06/2016 21:03:00"},
        {title: "New Year - New Post", href: "pages/01262017-new-year-new-post.html", description: "Welcome to 2017 - It's a new year, lots of fun things to look forward to", publishdate: "01/26/2017 15:54:00"},
        {title: "Blog updates and new upcoming topics", href: "pages/01262017-upcoming-updates.html", description: "Lots of stuff in the pipeline, new technology, more insight, what am i using? what projects am i wanting to dive into", publishdate: "01/26/2017 15:59:00"},
        {title: "Why am I blogging/programming?", href: "pages/01262017-why-blog.html", description: "Find out why I'm blogging (i should make a ramblings section)", publishdate: "01/26/2017 16:11:00"}
        ];
});
