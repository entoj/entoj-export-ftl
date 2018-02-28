'use strict';

/**
 * Requirements
 */
const FtlBooleanOperandNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlBooleanOperandNodeRenderer.js').FtlBooleanOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlBooleanOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlBooleanOperandNodeRenderer, 'export.renderer/FtlBooleanOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
