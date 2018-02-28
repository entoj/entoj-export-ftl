'use strict';

/**
 * Requirements
 */
const FtlVariableNodeRenderer = require(FTL_SOURCE + '/export/renderer/FtlVariableNodeRenderer.js').FtlVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FtlVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FtlVariableNodeRenderer, 'export.renderer/FtlVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
