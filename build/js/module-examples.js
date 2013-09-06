angular.module('angular-examples', [])
.directive('myShow', function () {
return {
 restrict: 'A',
 link: function (scope, element, attr) {
    scope.$watch(attr.myShow, function(val){
    element.css('display', val ? '' : 'none');
  });
 }
};
})
.service('coderService', function(){
	    this.concat= function(text){
	        return text +  "Service!";
	    }; 
	});