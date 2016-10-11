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

        {title: "Codewars (0)", href: "Codewars/", description: "Code Wars Solutions"},
        {title: "Codingame (0)", href: "Codingame/", description: "Codingame Solutions"},
        {title: "Exercism IO (0)", href: "Exercism/", description: "Exercism.io Solutions"},
        {title: "Google Code Jam (0)", href: "GoogleCodeJam/", description: "Google Code Jame Solutions"},
        {title: "Hackerrank (1)", href: "HackerRank/", description: "Hackerrank Solutions"},
        {title: "LeetCode (0)", href: "leetcode/", description: "LeetCode Solutions"},
        {title: "Open AI Gym (0)", href: "OpenAIGym/", description: "Open AI Gym Solutions"},
        {title: "Project Euler (0)", href: "ProjectEuler/", description: "Project Euler Solutions"}
    ];
});
