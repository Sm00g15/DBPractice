const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(() => {
	mongoose.connect('mongodb://localhost/users_test')
	mongoose.connection
	.once('open', () => console.log())
	.on('error', (error) => {
		console.warn('Warning', error)
	});
})

// Hook that runs before each iteration of tests
beforeEach((done) => {
	const { users, comments, blogPosts } = mongoose.connection.collections;
		beforeEach((done) => {
			users.drop(() => {
				comments.drop(() => {
					blogposts.drop(() => {
			// Ready to run the next test!
						done();
					});
				})			
			})
		})
})