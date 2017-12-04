var app = angular.module("testApp", ["ngRoute","angular-join","ngSanitize"]);

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

        .when("/program/:UID", {
        templateUrl : "program.html",
        controller : "programCtrl"
    })

        .when("/faculty/:speaker", {
        templateUrl : "facultydetail.html",
        controller : "facultyCtrl"
    })

        .when("/faculty", {
        templateUrl : "faculty.html",
        controller : "facultyCtrl"
    });
});

app.controller("programCtrl", function ($scope, $routeParams) {
   console.log($routeParams.UID);
   $scope.fltr = {};
   $scope.plist = pl;
   $scope.fltr.UID = $routeParams.UID;
//    $scope.fltr.ProgramTitle = $routeParams.progTitle;
//    $scope.fltr.Date = $routeParams.Date;
//    $scope.fltr.TimeStart = $routeParams.TimeStart;
   $scope.item = {heading: "Program Information"};


    $scope.toTime = function(time) { 
    var parts = time.split(":");
    var date = new Date(0, 0, 0, parts[0], parts[1], parts[2]);
    return date;
    };
    
    $scope.selected = -1;
    
});

app.controller("scheduleCtrl", function ($scope, $routeParams) {
   $scope.filters = {};
   $scope.plist = pl;

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
// Handle Author - TBD
   $scope.showAuthor = function (val) {
   alert("Show bio for: " + val);
   };   
      
   
//  Create datetime from time string
    $scope.toTime = function(time) { 
    var parts = time.split(":");
    var date = new Date(0, 0, 0, parts[0], parts[1], parts[2]);
    return date;
    };
    
    
    $scope.selected = -1;
    
});

app.controller("facultyCtrl",  [ '$scope', '$sce','$routeParams', function ($scope, $sce, $routeParams ) {
   $scope.flt = {};
   $scope.item = {heading: "Faculty"};
   
//    console.log($routeParams.speaker);
	// loop through Programs, associate speakers with programs
	var rows = _.map(sp, function(speak){ 
	var question = _.filter(pl, function(q){ 
	if (_.includes(q.speakers,speak.speaker)){
	// console.log(q);
    return q
    }
    });
	var tmp = []
    for (i = 0; i < question.length; i++) {
//     sid.push("sessionId":question[i].SessionID);
    tmp.push({"UID":question[i].UID,"SessionID":question[i].SessionID, "ProgramTitle":question[i].ProgramTitle, "Date":question[i].Date, "TimeStart":question[i].TimeStart, "TimeEnd":question[i].TimeEnd,});
    }
    speak.ProgramTitle = tmp;
    return speak; 
    // question[i]? question[i].SessionID:'';
    })
    
    $scope.sp = rows;
    

   if( $routeParams.speaker !=null ) {
   $scope.flt.speaker = $routeParams.speaker;
   }
   else {
   $scope.flt = '';
   }
   
   $scope.toTime = function(time) {
   var parts = time.split(":");
   var date = new Date(0, 0, 0, parts[0], parts[1], parts[2]);
   return date;
   };

   
   
}]);

   app.filter("groupBy", function() {
    return _.memoize(function(items, field) {
            return _.groupBy(items, field);
            alert('groupby');
        }
    );
});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
