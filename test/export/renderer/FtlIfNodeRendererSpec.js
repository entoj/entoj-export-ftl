'use strict';

/**
 * Requirements
 */
const FtlIfNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlIfNodeRenderer.js').FtlIfNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlIfNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlIfNodeRenderer, 'export.renderer/FtlIfNodeRenderer', undefined, require('./RendererHelper.js').options());
});
