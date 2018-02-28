/**
 * @namespace export.renderer
 */
module.exports =
{
    FtlVariableNodeRenderer: require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,
    FtlIfNodeRenderer: require('./FtlIfNodeRenderer.js').FtlIfNodeRenderer,
    FtlSetNodeRenderer: require('./FtlSetNodeRenderer.js').FtlSetNodeRenderer,

    rendererList:
    [
        require('./FtlIfNodeRenderer.js').FtlIfNodeRenderer,
        require('./FtlVariableNodeRenderer.js').FtlVariableNodeRenderer,
        require('./FtlSetNodeRenderer.js').FtlSetNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer,
        require('entoj-system').export.renderer.NodeListRenderer
    ]
};
