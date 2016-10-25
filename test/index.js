/**
 * Created by ayberk on 25.10.2016.
 */
var boot = require('../bin/www.js').boot,
    shutdown = require('../bin/www.js').shutdown,
    port = require('../bin/www.js').port,
    superagent = require('superagent'),
    expect = require('expect.js');

describe('server', function () {
    before(function () {
        boot();
    });
    describe('homepage', function () {
        it('should respond to GET', function (done) {
            superagent
                .get('http://localhost:' + port)
                .end(function (res) {
                    expect(res.status).equal(200);
                    done()
                })
        })
    });
    after(function () {
        shutdown();
    });
});