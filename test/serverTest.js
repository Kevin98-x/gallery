// Set the environment to 'test' for proper configuration during testing
process.env.NODE_ENV = 'test';   

// Import necessary modules
var chai = require('chai');
var chaiHttp = require('chai-http');

// Import the server instance
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

// Test Suite: Photos
describe('Photos', function() {

    // Test Case: List all photos
    it('should list ALL photos on / GET', function(done) {
        this.timeout(60000); // Set timeout to 60 seconds to allow sufficient response time
        
        chai.request(server) // Make a request to the server
        .get('/') // Target the root route
        .end(function(err, res) {
            // Debugging logs for troubleshooting
            if (err) {
                console.error('Error occurred:', err);
            }
            console.log('Response Status:', res.status);
            console.log('Response Body:', res.body);

            // Assertions
            res.should.have.status(200); // Assert that the response status is 200
            res.should.be.json;         // Assert that the response is in JSON format
            res.body.should.be.a('array'); // Assert that the response body is an array
            
            done(); // Indicate that the test is complete
        });
    });
});
