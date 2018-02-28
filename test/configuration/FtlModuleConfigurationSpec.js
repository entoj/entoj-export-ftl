'use strict';

/**
 * Requirements
 */
const FtlModuleConfiguration = require(FTL_SOURCE + '/configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const baseSpec = require('entoj-system/test').BaseShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FtlModuleConfiguration.className, function()
{
    /**
     * Base Test
     */
    baseSpec(FtlModuleConfiguration, 'configuration/FtlModuleConfiguration', () =>
    {
        return [global.fixtures.globalConfiguration, global.fixtures.buildConfiguration];
    });


    beforeEach(function()
    {
        global.fixtures = projectFixture.createStatic();
    });
});
