var app_AppsIUse = angular.module("leftHandNav", []);
app_AppsIUse.controller("leftNavController", function($scope) {
    $scope.navigation = [
        {title: "Sublime Text Editor", href: "#Sublime", description: "Text Editor"},
        {title: "Google Chrome", href: "#GoogleChrome", description: "Browser"},
        {title: "Google Chrome Canary", href: "#GoogleChromeCanary", description: "Browser"},
        {title: "Firefox", href: "#Firefox", description: "Browser"},
        {title: "Firebug", href: "#Firebug", description: "Browser Extension"},
		    {title: "Visual Studio", href: "#VisualStudio", description: "Development IDE"},
        {title: "Eclipse", href: "#eclipse", description "Development IDE"},
        {title: "Atom", href: "#atom", description "Development IDE"},
        {title: "Back to Homepage", href: "http://13scoobie.github.io"}
    ];
});

app_AppsIUse.controller("rightHandController", function($scope) {

    $scope.showAll = true;
    $scope.checkChange = function() {
        for(t in $scope.servicesArray){
            if($scope.servicesArray[t].on){
                $scope.showAll = false;
                return;
            }
        }
        $scope.showAll = true;
    };

   $scope.myFunc = function(a) {
       if($scope.showAll) { return true; }

       var sel = false;

        for(service in $scope.servicesArray){
            var t = $scope.servicesArray[service];
            console.log(t);
            if(t.on){
                if(a.technology.indexOf(t.name) == -1){
                    return false;
                }else{
                    sel = true;
                }
            }
        }
       return sel;
    };

    $scope.servicesArray = [
		{ name: "Music", on: false},
		{ name: "Photography", on: false},
		{ name: "Movies", on: false},
		{ name: "Mobile Development", on: false},
		{ name: "Web Development", on: false},
		{ name: "Windows Development", on: false},
		{ name: "Internet Surfing", on: false}
	];

    $scope.rightContent = [
        {
            appName: "GoogleChrome",
            href: "https://www.google.com/chrome/",
            description: "Browser released by Google",
            "technology": [
                "Web Development"
            ]
        },
        {
            appName: "Firefox",
            href: "https://www.mozilla.org/en-US/firefox/new/",
            description: "Browser released by Mozilla team",
            "technology": [
                "Web Development"
            ]
        },
        {
            appName: "Firebug",
            href: "getfirebug.com/",
            description: "Extension that comes in handy for web development (for firefox)",
            "technology": [
                "Web Development"
            ]
        },
    		{
    			appName: "Sublime",
    			href: "http://www.sublimetext.com",
    			description: "Text editor used for writing code quickly",
    			"technology": [
    				"Web Development"
    			]
    		},
    		{
    			appName: "VisualStudio",
    			href: "http://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx",
    			description: "My Main IDE for c#/ASP.net Development",
    			"technology": [
    				"Web Development", "Windows Development"
    			]
    		}
	];
});
