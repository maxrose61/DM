var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.filters = { };
   $scope.plist = pl;
// Load PDF
   $scope.sendVal = function (val) {
   console.log(val);
   loadVideo(val);
   };
// Handle Author
   $scope.showAuthor = function (val) {
//    console.log(val);
   alert(val);
   };   
   
// FILTER CHAPTER LIST AND SET CHAPTER DISPLAY
   $scope.filterChap = function (ref) {
   console.log(ref);
   $scope.filters.ProgramAttributes = ref;
   //console.log(uniqueTags.indexOf(ref));
   $("#currChap").text(ref);
   };

   $scope.uniqueTags = function() {
  return _.chain($scope.plist)
  .sortBy('ProgramAttributes')
    .pluck('ProgramAttributes')
//     .reject('ProgramAttributes'= null);
    .unique()
    .value();
    };
});

//var myApp = angular.module('myApp', ['angular.filter']);

//| filter:{Message: '!!'}
