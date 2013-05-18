/*jslint browser: true, devel: true, white: true, indent: 4, maxlen: 80 */
angular.module( 'routingDemo.controllers', [] ).config(
	function( $controllerProvider )
	{
		$controllerProvider.register(
			'page1',
			function( $scope )
			{
				$scope.message = "You're on Page 1";
			}
		);
		$controllerProvider.register(
			'page2',
			function( $scope )
			{
				$scope.message = "You're on Page 2";
			}
		);
	}
);