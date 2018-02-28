'use strict';

/**
 * Exports
 * @ignore
 */
module.exports.options = function(dynamic, fixtureConfiguration)
{
    const result =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const FtlModuleConfiguration = require(FTL_SOURCE + '/configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
            const FtlConfiguration = require(FTL_SOURCE + '/export/FtlConfiguration.js').FtlConfiguration;
            const moduleConfiguration = new FtlModuleConfiguration(global.fixtures.globalConfiguration, buildConfiguration);
            return new FtlConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        basePath: FTL_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createDynamic(fixtureConfiguration);
    }
    else
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createStatic(fixtureConfiguration);
    }
    result.resultExtension = '.ftl';
    return result;
};
