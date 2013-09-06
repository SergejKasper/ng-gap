angular.module('google-trends', []).directive('googleTrends', [function () {
		return {
			restrict: 'E',
			link: function (scope, iElement, iAttrs) {
				scope.$watch(function() {
	    		return angular.toJson([iAttrs.width, iAttrs.height, iAttrs.url]);
  				}, function() {
				iElement.html('<iframe width="' + iAttrs.width + '" height="' + iAttrs.height + '" src="' + iAttrs.url + '" style="border: none;"></iframe>');
				});
			}
		};
	}])