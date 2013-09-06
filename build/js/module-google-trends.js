angular.module('google-trends', []).directive('googleTrends', [function () {
		return {
			restrict: 'E',
			link: function (scope, iElement, iAttrs) {
				scope.$watch(function() {
	    			return angular.toJson([iAttrs.width, iAttrs.height]);
  				}, function() {
					iElement.html('<iframe width="' + iAttrs.width + '" height="' + iAttrs.height + '" src="//www.google.de/trends/fetchComponent?hl\75de\46q\75angularjs+%2B+angular.js,+emberjs+%2B+ember.js,+backbonejs+%2B+backbone.js,+knockoutjs+%2B+knockout.jsr\46date\0751/2011+33m\46cmpt\75q\46content\0751\46cid\75TIMESERIES_GRAPH_0\46export\0755\46w\75800\46h\075600" style="border: none;"></iframe>');
				});
			}
		};
	}])