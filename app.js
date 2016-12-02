angular.module('app', [])
  .controller('ctrl', ['$scope', '$http', function($scope, $http) {

		$http.get("https://api.whatdoestrumpthink.com/api/v1/quotes/")
			.then(function(response) {

				$scope.personalized = response.data.messages.personalized;
				$scope.non_personalized = response.data.messages.non_personalized;

				$scope.theySaid = $scope.personalized[Math.floor(Math.random() * 573)];
				$scope.heSaid = $scope.non_personalized[Math.floor(Math.random() * 48)];
			});

			$scope.theySaidFunc = function() {
				$scope.theySaid =  $scope.personalized[Math.floor(Math.random() * 573)];
			};

			$scope.heSaidFunc = function() {
				$scope.heSaid =  $scope.non_personalized[Math.floor(Math.random() * 48)];
			};

	}]);


	//changing background color
    var colors = ['#16a085', '#2c3e50', '#e74c3c', '#9b59b6', '#342224', "#BDBB99", "#77B1A9", "#73A857",
     "#990066",'#ee1c27','#2b003a','#00887c','#8c0049','#27ae60','#f39c12', '#FB6964',"#472E32", "#77326E"];
    $(document).ready(function() { 
        $("button").click(function() {
         	var color = Math.floor(Math.random() * colors.length);
            $("body").css({"background-color": colors[color], "transition":"background-color 1s ease"});
            $("h2, h3, span, button").css({"color": colors[color], "transition":"color 1s ease"});        
       	});       
    });        

  			
	

  			

				