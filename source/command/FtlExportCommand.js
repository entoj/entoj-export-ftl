'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const FtlExportTask = require('../task/FtlExportTask.js').FtlExportTask;
const FtlModuleConfiguration = require('../configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;


/**
 * @memberOf command
 */
class FtlExportCommand extends ExportCommand
{
    /**
     */
    constructor(context)
    {
        super(context);

        // Assign options
        this._exportName = 'Ftl';
        this._moduleConfigurationClass = FtlModuleConfiguration;
        this._exportTaskClass = FtlExportTask;
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [Context] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'command/FtlExportCommand';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlExportCommand = FtlExportCommand;
