'use strict';

/**
 * Requirements
 */
const FtlConfiguration = require(FTL_SOURCE + '/export/FtlConfiguration.js').FtlConfiguration;
const FtlModuleConfiguration = require(FTL_SOURCE + '/configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const configurationSpec = require('entoj-system/test').export.ConfigurationShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FtlConfiguration.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createStatic(true);
        const moduleConfiguration = new FtlModuleConfiguration(fixture.globalConfiguration, fixture.buildConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration);
            return parameters;
        }
        else
        {
            return [undefined, undefined, {}, undefined, undefined, undefined, fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration];
        }
    }

    configurationSpec(FtlConfiguration, 'export/FtlConfiguration', prepareParameters, { identifier: 'Ftl' });
});
