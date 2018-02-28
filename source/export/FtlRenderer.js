'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class FtlRenderer extends Renderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/FtlRenderer';
    }

    
    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': ['export/FtlRenderer.nodeRenderers', 'export/FtlRenderer.options'] };
    }
}


// Exports
module.exports.FtlRenderer = FtlRenderer;
