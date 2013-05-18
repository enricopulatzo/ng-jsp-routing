/*jslint browser: true, devel: true, white: true, indent: 4, maxlen: 80 */
angular.module( 'routingDemo', ['routingDemo.controllers'] ).config(
	function( $locationProvider, $routeProvider )
	{
		$locationProvider.html5Mode( true ).hashPrefix( '!' );
		$routeProvider.when(
			CONTEXT_ROOT + "/app/1",
			{
				controller : "page1",
				templateUrl : CONTEXT_ROOT + "/partials/page1.html"
			}
		).when(
			CONTEXT_ROOT + "/app/2",
			{
				controller : "page2",
				templateUrl : CONTEXT_ROOT + "/partials/page2.html"
			}
		)
		.otherwise( { redirectTo : CONTEXT_ROOT + "/app/1" } );
	}
);