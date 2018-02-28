'use strict';

/**
 * Configure path
 */
const path = require('path');
global.FTL_SOURCE = path.resolve(__dirname + '/../source');
global.FTL_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.FTL_TEST = __dirname;


/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;
