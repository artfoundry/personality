'use strict';

angular.module('personality.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, sharedResults, $location) {

	var creatives = [
		"Your momma",
		"A sheep jumping off the Eiffel Tower",
		"Why?",
		"Mike",
		"President Obama",
		"Poop",
		"A gerbil",
		"Sharks with frickin laser beams attached to their heads!",
		"Inconceivable!",
		"A dead parrot"
	];

	$scope.images = 
		[{
			'image': "bananas.jpeg",
			'genius': "A man with bananas on his head",
			'boring': "Fruit",
			'creative': getCreativeAnswer()
		},{
			'image': "batman_baby.jpeg",
			'genius': "A baby who thinks he's Batman",
			'boring': "A baby",
			'creative': getCreativeAnswer()
		},{
			'image': "batman_real.jpeg",
			'genius': "Batman",
			'boring': "A cartoon",
			'creative': getCreativeAnswer()
		},{
			'image': "darwin-award.jpg",
			'genius': "A woman about to win a Darwin award",
			'boring': "A dangerous situation",
			'creative': getCreativeAnswer()
		},{
			'image': "dog-superman.jpeg",
			'genius': "A dog that thinks it\s Superman",
			'boring': "A silly costume",
			'creative': getCreativeAnswer()
		},{
			'image': "ministry-of-silly-walks.jpg",
			'genius': "Ministry of Silly Walks",
			'boring': "A man with his leg really high in the air",
			'creative': getCreativeAnswer()
		},{
			'image': "orangutan.jpg",
			'genius': "An orangutan posing for the camera",
			'boring': "A primate",
			'creative': getCreativeAnswer()
		},{
			'image': "rubiks.jpg",
			'genius': "Rubik's cube",
			'boring': "A colorful cube",
			'creative': getCreativeAnswer()
		},{
			'image': "silly-dog.jpg",
			'genius': "A dog with sunglasses and a paper towel tube who knows what he's doing",
			'boring': "A dog doing...something",
			'creative': getCreativeAnswer()
		},{
			'image': "silly-sign.jpg",
			'genius': "You breaking the law",
			'boring': "A fake sign",
			'creative': getCreativeAnswer()
		}
	];


	$scope.index = 0;

	$scope.chooseImage = function(){
		return $scope.images[$scope.index].image;
	};

	$scope.addResults = function(){
		sharedResults.setResults($scope.ansTypes.choice);
		$scope.index += 1;
		if ($scope.index < 10)
			initForm();
		else
			$location.path( "/view2" );
	};

	$scope.randomizeAnswers = function(){
		var typeArr = ["genius", "boring", "creative"],
			pick;
		pick = typeArr.splice(Math.floor(Math.random() * 3), 1);
		$scope.ansTypes.push(pick[0]);
		pick = typeArr.splice(Math.floor(Math.random() * 2), 1);
		$scope.ansTypes.push(pick[0]);
		$scope.ansTypes.push(typeArr[0]);
	};

	function initForm() {
		$scope.ansTypes = [];
		$scope.randomizeAnswers();
		$scope.imageShown = $scope.chooseImage();
	};

	function getCreativeAnswer() {
		var pick = Math.floor(Math.random() * 10);
		return creatives[pick];
	};

	initForm();
});