var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.filters = { };
   $scope.plist = pl;
   $scope.sendVal = function (val) {
   console.log(val);
   loadVideo(val);
   };
// FILTER CHAPTER LIST AND SET CHAPTER DISPLAY
   $scope.filterChap = function (ref) {
   console.log('ref is ' + ref);
   $scope.filters.ProgramTitle = ref;
   //console.log(uniqueTags.indexOf(ref));
   $("#currChap").text('this is' + ref);
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
