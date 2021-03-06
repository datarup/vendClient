var settings = angular.module( 'vendClient.settings', [
				'ui.router',
        'ui.bootstrap',
        'ui.select',
        'ngSanitize'
    ]);

settings.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'settings', {
        url: '/settings',
        views: {
            "main": {
                controller: 'SettingsCtrl',
                templateUrl: 'settings/settings.tpl.html'
            }
        },
        data:{ pageTitle: 'Settings' }
    });
}]);

settings.controller( 'SettingsCtrl', [ '$rootScope', '$scope', '$timeout',
	function SettingsController( $rootScope, $scope, $timeout) {

	$scope.settingsFail = false;
	$scope.settingsError = '';
	$scope.savingSettings = false;
	$scope.showSuccess = false;
	$scope.message = [
		{ type: 'success', msg: 'Settings saved successfully!' }
	];

	$scope.saveChanges = function() {
		$scope.savingSettings = true;
		window.chrome.storage.sync.set({
			'vendClient_urls_productsURL': $rootScope.urls.productsURL,
			'vendClient_urls_refreshTokenURL' : $rootScope.urls.refreshTokenURL,
			'vendClient_credentials_ClientId' : $rootScope.credentials.clientId,
			'vendClient_credentials_ClientSecret' : $rootScope.credentials.clientSecret,
			'vendClient_credentials_refreshToken' : $rootScope.credentials.refreshToken,
			'vendClient_credentials_token' : $rootScope.credentials.token,
			'vendClient_credentials_tokenExpiresAt' : $rootScope.credentials.tokenExpiresAt
		}, function() {
			$scope.savingSettings = false;
			$scope.showSuccess = true;
			//TODO: Show message if saved successfully
			//$timeout(function(){
			//	$scope.showSuccess = false;
			//}, 2000);
		});
	};

	$scope.getSettings = function() {
		window.chrome.storage.sync.get('urls_productsURL', function (result) {
			alert(result.urls.productsURL);
		});
	};

}]);