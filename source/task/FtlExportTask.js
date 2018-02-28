'use strict';

/**
 * Requirements
 * @ignore
 */
const FtlExporter = require('../export/FtlExporter.js').FtlExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;


/**
 * @memberOf task
 */
class FtlExportTask extends ExportTask
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.GlobalRepository} globalRepository
     */
    constructor(cliLogger, globalRepository, buildConfiguration, exporter)
    {
        super(cliLogger, globalRepository, exporter);
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, GlobalRepository, BuildConfiguration, FtlExporter] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'task/FtlExportTask';
    }


    /**
     * @inheritDoc
     */
    get sectionName()
    {
        return 'Exporting FreeMarker files';
    }


    /**
     * @inheritDoc
     */
    get exportName()
    {
        return 'ftl';
    } 
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlExportTask = FtlExportTask;
