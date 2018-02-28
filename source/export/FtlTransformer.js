'use strict';

// Requirements
const Transformer = require('entoj-system').export.Transformer;


/**
 * @memberOf export
 * @extends export.Transformer
 */
class FtlTransformer extends Transformer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FtlTransformer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/FtlTransformer.nodeTransformers'] };
    }
}


// Exports
module.exports.FtlTransformer = FtlTransformer;
