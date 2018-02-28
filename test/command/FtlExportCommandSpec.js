'use strict';

/**
 * Requirements
 */
const FtlExportCommand = require(FTL_SOURCE + '/command/FtlExportCommand.js').FtlExportCommand;
const exportCommandSpec = require('entoj-system/test').command.ExportCommandShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FtlExportCommand.className, function()
{
    /**
     * Command Test
     */
    function prepareParameters()
    {
        const fixture = projectFixture.createDynamic();
        return [fixture.context];
    }

    exportCommandSpec(FtlExportCommand, 'command/FtlExportCommand', prepareParameters, { action: 'jsp' });
});
