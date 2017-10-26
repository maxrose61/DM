var app = angular.module("testApp", ["ngRoute","angular-join"]);

app.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
    })
    .when("/help", {
        templateUrl : "help.html",
    })
        .when("/copyright", {
        templateUrl : "copyright.html",
    })

    .when("/schedule", {
        templateUrl : "schedule.html",
        controller : "scheduleCtrl"
    })
        .when("/schedule/:progAtt", {
        templateUrl : "schedule.html",
        controller : "scheduleCtrl"
    })

        .when("/faculty", {
        templateUrl : "faculty.html",
        controller : "facultyCtrl"
    });
});
app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("scheduleCtrl", function ($scope, $routeParams) {
   $scope.filters = {};
   $scope.plist = pl;
//    console.log($routeParams.progAtt);
// Load PDF
//    $scope.sendVal = function (val) {
//    console.log(val);
//    loadVideo(val);
//    };
   if($routeParams.progAtt == ':general') {
   $scope.filters.ProgramAttributes = "General Sessions";
   $scope.item = {heading: "General Sessions"};
   }
   else if ($routeParams.progAtt == ':special') {
   $scope.filters.ProgramAttributes = "Special Sessions";
   $scope.item = {heading: "Special Sessions"};
   }
   else if ($routeParams.progAtt == ':fundamentals') {
   $scope.filters.ProgramAttributes = "Fundamentals";
   $scope.item = {heading: "Fundamentals"};
   }
   else if ($routeParams.progAtt == ':recent') {
   $scope.filters.ProgramAttributes = "Recent Developments";
   $scope.item = {heading: "Recent Developments"};
   }
   else {
   $scope.filters = '';
   $scope.item = {heading: "Institute Schedule"};
   };
// Handle Author
   $scope.showAuthor = function (val) {
//    console.log(val);
   alert("Show bio for: " + val);
   };   
      
// FILTER CHAPTER LIST AND SET CHAPTER DISPLAY
   $scope.filterChap = function (ref) {
//    console.log(ref);
   $scope.filters.ProgramAttributes = ref;
   //console.log(uniqueTags.indexOf(ref));
//    $("#currChap").text(ref);
   };
   
//  Create datetime from time string
    $scope.toTime = function(time) { 
    var parts = time.split(":");
    var date = new Date(0, 0, 0, parts[0], parts[1], parts[2]);
    return date;
    };
    
    
    $scope.selected = -1;
    
//     $scope.uniqueTags = function() {
//     return _.chain($scope.plist)
//     .sortBy("ProgramAttributes")
//     .pluck("ProgramAttributes")
//     .unique()
//     .value();
//     };
    
    
});

app.controller("facultyCtrl", function ($scope) {
   $scope.filters = {};
   $scope.sp = sp;
   $scope.item = {heading: "Faculty"};

   
   
});

   app.filter("groupBy", function() {
    return _.memoize(function(items, field) {
            return _.groupBy(items, field);
        }
    );
});

