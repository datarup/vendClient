var refreshToken = angular.module( 'vendClient.refreshToken', [
				'ui.router',
        'ui.bootstrap',
        'ui.select',
        'ngSanitize'
    ]);

refreshToken.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'refreshToken', {
        url: '/refreshToken',
        views: {
            "main": {
                controller: 'RefreshTokenCtrl',
                templateUrl: 'refreshToken/refreshToken.tpl.html'
            }
        },
        data:{ pageTitle: 'Refresh Token' }
    });
}]);

refreshToken.filter('secondsToDateTime', [function() {
	return function(seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}]);

refreshToken.controller( 'RefreshTokenCtrl', [ '$rootScope', '$scope', '$http',
	function RefreshTokenController( $rootScope, $scope, $http) {

	$scope.refreshTokenFail = false;
	$scope.refreshingToken = false;
	$scope.refreshTokenError = '';

	var requestData = {'client_id': $rootScope.credentials.clientId, 'client_secret':$rootScope.credentials.clientSecret,
		'refresh_token': $rootScope.credentials.refreshToken, 'grant_type':'refresh_token'};

	var transform = function(data){
		return $.param(data);
	};

	$scope.getNewAccessToken = function() {
		$scope.refreshingToken = true;
		$http.post('https://chromeapp.vendhq.com/api/1.0/token', requestData, {
			headers: {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'},
			transformRequest: transform
			}).then(function(response) {
				$scope.refreshTokenFail = false;
				$scope.refreshingToken = false;
				if(response.data){
					$rootScope.credentials.token = response.data.access_token;
					$rootScope.credentials.tokenType = response.data.token_type;
					$rootScope.credentials.tokenExpiresAt = response.data.expires;
					$rootScope.credentials.tokenExpiresAtFriendly = new Date($rootScope.credentials.tokenExpiresAt*1000);
					$rootScope.credentials.tokenExpiresIn = response.data.expires_in;
					window.chrome.storage.sync.set({
						'vendClient_credentials_token' : $rootScope.credentials.token,
						'vendClient_credentials_tokenExpiresAt' : $rootScope.credentials.tokenExpiresAt
					}, function() {
						// TODO: Notify that we saved.
						//message('Settings saved');
					});
				}
			}, function(data) {
				$scope.refreshTokenFail = true;
				$scope.refreshingToken = false;
				$scope.refreshTokenError = angular.fromJson(data);
			}
		);
	};
}]);