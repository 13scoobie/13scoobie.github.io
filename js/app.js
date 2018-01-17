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
    {title: "Blog", href: "/blog/", description: "Random tidbits of stuff im interested in / blog about"},
  ];
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91422300-1', 'auto');
ga('send', 'pageview');


var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}

var links = document.querySelectorAll("a");
links.forEach(function(link) {
  link.addEventListener("click", function() {
    trackOutboundLink(link.href);
  })
});