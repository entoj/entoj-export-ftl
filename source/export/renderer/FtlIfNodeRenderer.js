'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');

/**
 * Renders a if .. else ..  as FTL
 */
class FtlIfNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FtlIfNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('IfNode'));
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
        const promise = co(function*()
        {
            let result = '';

            // ... ? ... : ....
            if (node.parent && node.parent.is('ExpressionNode'))
            {
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '?then(';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= ', ';
                result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                result+= ')';
            }
            // If ...
            else if (!node.elseChildren.length && !node.elseIfChildren.length)
            {
                result+= '<#if ';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '</#if>';
            }
            // If ... elseif ... else ...
            else
            {
                result+= '<#if ';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                if (node.elseIfChildren.length)
                {
                    for (const elseIfNode of node.elseIfChildren)
                    {
                        result+= '<#elseif ';
                        result+= yield configuration.renderer.renderNode(elseIfNode.condition, configuration);
                        result+= '>';
                        result+= yield configuration.renderer.renderList(elseIfNode.children, configuration);
                    }
                }
                if (node.elseChildren.length)
                {
                    result+= '<#else>';
                    result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                }
                result+= '</#if>';
            }
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlIfNodeRenderer = FtlIfNodeRenderer;
