'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 *
 */
class FtlOperandNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FtlOperandNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('OperandNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        return Promise.resolve(' ' + node.value + ' ');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlOperandNodeRenderer = FtlOperandNodeRenderer;
