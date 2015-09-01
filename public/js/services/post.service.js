'use strict';

app.factory('Post', function(DS, $state) {

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

    var Post = DS.defineResource({
        basePath: '/api',
        idAttribute: '_id',
        name: 'posts',
        methods: {
          go: function () {
            $state.go('post', {postId: this._id});

          }
        },
        relations: {
          belongsTo: {
          	User: {
            	localField: 'users',
            	localKey: 'idAttribute',
            	parent: true          		
          	}
          }
        }
    })

    return Post;

}).run(function(Post) {});









