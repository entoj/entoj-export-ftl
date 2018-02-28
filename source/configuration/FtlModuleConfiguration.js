'use strict';

/**
 * Requirements
 * @ignore
 */
const Base = require('entoj-system').Base;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf configuration
 */
class FtlModuleConfiguration extends Base
{
    /**
     * @param  {model.configuration.GlobalConfiguration} globalConfiguration
     */
    constructor(globalConfiguration, buildConfiguration, options)
    {
        super();

        //Check params
        assertParameter(this, 'globalConfiguration', globalConfiguration, true, GlobalConfiguration);
        assertParameter(this, 'buildConfiguration', buildConfiguration, true, BuildConfiguration);

        // Create configuration
        const prefix = options
            ? options.prefix || 'ftl'
            : 'ftl';
        this._configurationName = buildConfiguration.get(prefix + '.configurationName', globalConfiguration.get(prefix + '.configurationName', prefix));
        this._exportPath = buildConfiguration.get(prefix + '.exportPath', globalConfiguration.get(prefix + '.exportPath', '${cache}/${configurationName}/export'));
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration, BuildConfiguration, 'configuration/FtlModuleConfiguration.options'] };
    }


    /**
     * @inheritDocss
     */
    static get className()
    {
        return 'configuration/FtlModuleConfiguration';
    }


    /**
     * Provides variables to use in path resolving
     *
     * @type {Object}
     */
    get variables()
    {
        return {
            configurationName: this._configurationName
        };
    }


    /**
     * The name of the export configurations for entities.
     *
     * @type {String}
     */
    get configurationName()
    {
        return this._configurationName;
    }


    /**
     * The path to the folder where files are exported to
     *
     * @type {String}
     */
    get exportPath()
    {
        return this._exportPath;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlModuleConfiguration = FtlModuleConfiguration;
