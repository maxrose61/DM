var app = angular.module("myApp", ["angular.filter", "ngRoute"]);

// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/session", {
//         templateUrl : "schedule.html",
//         controller : "sessionCtrl"
//     })
//     .otherwise({
//         template : "<h1>None</h1><p>Nothing has been selected</p>"
//     });
// });


app.controller("sessionCtrl", function($scope) {
   $scope.filters = {};
   $scope.plist = pl;
// Load PDF
   $scope.sendVal = function (val) {
   console.log(val);
   loadVideo(val);
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
	
	$scope.uniqueTags = function() {
	return _.chain($scope.plist)
	.sortBy("ProgramAttributes")
	.pluck("ProgramAttributes")
	.unique()
	.value();
	};
});

   app.filter("groupBy", function() {
    return _.memoize(function(items, field) {
            return _.groupBy(items, field);
        }
    );
});

