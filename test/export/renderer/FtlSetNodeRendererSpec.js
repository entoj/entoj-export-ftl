'use strict';

/**
 * Requirements
 */
const FtlSetNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlSetNodeRenderer.js').FtlSetNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlSetNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlSetNodeRenderer, 'export.renderer/FtlSetNodeRenderer', undefined, require('./RendererHelper.js').options());
});
