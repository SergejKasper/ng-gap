/**
 * @description RevealJS Presentation Framework Directive Module for AngularJS
 * @version 0.1
 * @author Sergej Kasper <sergejkasper@gmail.com>
 * @license MIT
 * @year 2013
 */

angular.module('ng-reveal', []).directive('reveal', [function () {
  		return {
  			restrict: 'A',
  			link: function (scope, iElement, iAttrs) {
  				iElement.ready(function function_name (argument) {
  					  Reveal.initialize({
  						controls: true,
  						progress: true,
  						history: true,
  						center: true,

  						theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  						transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  						// Optional libraries used to extend on reveal.js
  						dependencies: [
  							{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
  							{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  							{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  							{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  							{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
  							{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
  						]
  					});
  				});
  			}
  		};
	}]);
