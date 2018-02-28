'use strict';

// Requirements
const Exporter = require('entoj-system').export.Exporter;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const JinjaParser = require('entoj-system').export.parser.JinjaParser;
const FtlRenderer = require('./FtlRenderer.js').FtlRenderer;
const FtlTransformer = require('./FtlTransformer.js').FtlTransformer;
const FtlConfiguration = require('./FtlConfiguration.js').FtlConfiguration;
const FtlModuleConfiguration = require('../configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class FtlExporter extends Exporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, moduleConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), renderer, transformer);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, FtlModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
        this._configurationClass = FtlConfiguration;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/FtlExporter';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [GlobalRepository, BuildConfiguration, FtlModuleConfiguration, FtlRenderer, FtlTransformer] };
    }


    /**
     * @type {configuration.FtlModuleConfiguration}
     */
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
    }


    /**
     * @protected
     * @param {model.entity.EntityAspect} entity
     * @param {model.documentation.DocumentationCallable} macro
     * @param {Object} settings
     * @returns {Configuration}
     */
    createConfigurationInstance(entity, macro, settings)
    {
        return new this._configurationClass(entity, macro, settings,
            this.parser, this.renderer, this.transformer,
            this.globalRepository, this.buildConfiguration, this.moduleConfiguration);
    }
}


// Exports
module.exports.FtlExporter = FtlExporter;
