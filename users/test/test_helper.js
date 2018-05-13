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
	mongoose.connection.collections.users.drop(() => {
		// Ready to run the next test!
		done();
	});
})