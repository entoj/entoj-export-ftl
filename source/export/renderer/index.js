/**
 * @namespace export.renderer
 */
module.exports =
{
    FtlVariableNodeRenderer: require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,
    FtlIfNodeRenderer: require('./FtlIfNodeRenderer.js').FtlIfNodeRenderer,

    rendererList:
    [
        require('./FtlIfNodeRenderer.js').FtlIfNodeRenderer,
        require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer,
        require('entoj-system').export.renderer.NodeListRenderer
    ]
};
