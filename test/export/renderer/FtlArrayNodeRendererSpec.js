'use strict';

/**
 * Requirements
 */
const FtlArrayNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlArrayNodeRenderer.js').FtlArrayNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlArrayNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlArrayNodeRenderer, 'export.renderer/FtlArrayNodeRenderer', undefined, require('./RendererHelper.js').options());
});
