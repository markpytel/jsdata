'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll()
			}
		}
	}).state('createPost', {
		url: '/post/',
		templateUrl: 'js/create/create.html'
		//controller: 'PostCtrl'

	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, $stateParams, Post) {
	var _id = $stateParams.postId;
	//$scope.post = $stateParams;
	console.log($stateParams);
	Post.find(_id).then(function(post){
		$scope.post = post;
	})
	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/

	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/

	/*
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})