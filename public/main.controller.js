'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: '/main.html',
        controller: 'MainController',
        resolve: {
        	thePosts: function (Post){
        		return Post.findAll();
        		}
        	
        }
            // RESOLVE!

    })
})

app.controller('MainController', function($scope, thePosts) {

    /*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
 	// Post.findAll().then(function(posts){
 	// 	$scope.allPosts = posts;
 	// 	console.log(posts)
 	// })
	$scope.allPosts = thePosts;
	console.log(thePosts)


})

