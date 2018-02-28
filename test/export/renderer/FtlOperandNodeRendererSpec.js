'use strict';

/**
 * Requirements
 */
const FtlOperandNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlOperandNodeRenderer.js').FtlOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlOperandNodeRenderer, 'export.renderer/FtlOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
