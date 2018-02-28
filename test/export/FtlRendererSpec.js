'use strict';

/**
 * Requirements
 */
const FtlRenderer = require(FTL_SOURCE + '/export/FtlRenderer.js').FtlRenderer;
const FtlConfiguration = require(FTL_SOURCE + '/export/FtlConfiguration.js').FtlConfiguration;
const FtlModuleConfiguration = require(FTL_SOURCE + '/configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const FtlNodeRenderers = require(FTL_SOURCE + '/export/renderer/index.js');
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FtlRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const testFixtures =
    {
        //'should render conditions': 'conditions',
        //'should render assignments': 'assignments',
        //'should render calls': 'calls',
        //'should render loops': 'loops',
        //'should render filter': 'filter',
        //'should render macros': 'macro'
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const moduleConfiguration = new FtlModuleConfiguration(global.fixtures.globalConfiguration, global.fixtures.buildConfiguration);
            return new FtlConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        fixtureInputPath: FTL_FIXTURES + '/renderer',
        fixtureExpectedPath: FTL_FIXTURES + '/renderer',
        createFixture: () => projectFixture.createDynamic()
    };
    const prepareParameters = (parameters) =>
    {
        global.fixtures.context.di.map('nunjucks.filter/ImageUrlFilter.dataProperties', ['src']);
        global.fixtures.context.di.map('nunjucks.filter/LinkUrlFilter.dataProperties', ['url']);
        const classes = FtlNodeRenderers.rendererList;
        const nodeRenderers = global.fixtures.context.createInstances(classes);
        return [nodeRenderers];
    };
    rendererSpec(FtlRenderer, 'export/FtlRenderer', prepareParameters, testFixtures, options);
});
