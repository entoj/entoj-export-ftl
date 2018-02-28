'use strict';

/**
 * Requirements
 * @ignore
 */
const FtlOperandNodeRenderer = require('./FtlOperandNodeRenderer.js').FtlOperandNodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');

/**
 *
 */
class FtlBooleanOperandNodeRenderer extends FtlOperandNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FtlBooleanOperandNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('BooleanOperandNode'));
    }

    /**
     * @return {Promise<Boolean>}
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            let result = ' ';

            if(!node.value) {
                throw new Error('Could not locate boolean operand value in ' + node.parent);
            }

            if (node.value=='and')
            {
                result+= '&& ';
            }
            else if (node.value=='or')
            {
                result+= '|| ';
            }
            else if (node.value=='not')
            {
                result+= '!';
            }
            else {
                throw new Error('Could not locate boolean operand value in ' + node.parent);
            }
            return result;
        }).catch(ErrorHandler.handler(scope));
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FtlBooleanOperandNodeRenderer = FtlBooleanOperandNodeRenderer;
