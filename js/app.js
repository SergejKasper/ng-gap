angular.module('revealAngular', ['ng-reveal','angular-examples','googlechart', 'google-trends'])
    .controller('appController', function ($scope, $http) {
    $http.defaults.useXDomain = true; //CORS
    $scope.object ="Kernfeatures"; 
    $http.get('js/json/features.js').success(function(data){ 
        $scope.features = data; // Daten zu einigen Angular Features, die in den Slides datgestellt werden
      });
    })
    //Anzahl der Apps in den einzelnen Stors. Säulendiagram wird mit Angular und 'googlechart' angezeigt. 
    .controller('ChartCtrl', function ($scope, $http) {
			$http.get('js/json/stores.js').success(function(data){
        $scope.chart = data;
      });
    })
    //"Das Coden kann beginnen" - Gehört zum Beispiel für die MVC Architektur
    .controller('einController', function ($scope) {
      $scope.model = "kann beginnen!";
    })
    //Der Code aus dem Beispiel : "Ich bin ein Service"
    .controller('einServiceController', function ($scope, coderService) {
      $scope.myModel = "Ich bin ein ";
      $scope.$watch("myModel", function watchModel(value) {
        $scope.myOtherModel =  coderService.concat(value);
      })
    });