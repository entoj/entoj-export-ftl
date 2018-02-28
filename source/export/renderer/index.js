/**
 * @namespace export.renderer
 */
module.exports =
{
    FtlVariableNodeRenderer: require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,

    rendererList:
    [
        require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer,
        require('entoj-system').export.renderer.NodeListRenderer
    ]
};
