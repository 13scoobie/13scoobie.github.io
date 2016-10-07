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

        {title: "Codewars", href: "Codewars/", description: "Code Wars Solutions"},
        {title: "Codingame", href: "Codingame/", description: "Codingame Solutions"},
        {title: "Excercism IO", href: "Excercismio/", description: "Excercism.io Solutions"},
        {title: "Google Code Jam", href: "HackerRank/", description: "Google Code Jame Solutions"},
        {title: "Hackerrank", href: "HackerRank/", description: "Hackerrank Solutions"},
        {title: "LeetCode", href: "leetcode/", description: "LeetCode Solutions"},
        {title: "Open AI Gym", href: "OpenAIGym/", description: "Open AI Gym Solutions"},
        {title: "Project Euler", href: "ProjectEuler/", description: "Project Euler Solutions"}
    ];
});
