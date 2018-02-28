'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const FtlModuleConfiguration = require('../configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class FtlConfiguration extends Configuration
{
    /**
     * @ignore
     */
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, FtlModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
        this._identifier = moduleConfiguration.configurationName;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/FtlConfiguration';
    }


    /**
     * @type {configuration.FtlConfiguration}
     */
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
    }


    /**
     * @inheritDoc
     */
    refineConfiguration(configuration)
    {
        const result = configuration;
        result.moduleConfiguration = this.moduleConfiguration;
        return Promise.resolve(result);
    }
}


// Exports
module.exports.FtlConfiguration = FtlConfiguration;
