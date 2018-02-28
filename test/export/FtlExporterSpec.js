'use strict';

/**
 * Requirements
 */
const FtlExporter = require(FTL_SOURCE + '/export/FtlExporter.js').FtlExporter;
const FtlModuleConfiguration = require(FTL_SOURCE + '/configuration/FtlModuleConfiguration.js').FtlModuleConfiguration;
const FtlRenderer = require(FTL_SOURCE + '/export/FtlRenderer.js').FtlRenderer;
const FtlTransformer = require(FTL_SOURCE + '/export/FtlTransformer.js').FtlTransformer;
const DocumentationCallable = require('entoj-system').model.documentation.DocumentationCallable;
const exporterSpec = require('entoj-system/test').export.ExporterShared;
const projectFixture = require('entoj-system/test').fixture.project;
const co = require('co');
const fs = require('fs');
const UPDATE_SPECS = true;


/**
 * Spec
 */
describe(FtlExporter.className, function()
{
    /**
     * Exporter Test
     */
    function prepareParameters(parameters, fullyConfigure)
    {
        const options =
        {
            settings:
            {
                jsp:
                {
                    configurationName: 'default'
                }
            }
        };
        if (fullyConfigure)
        {
            options.mappings =
            [
                {
                    type: require(FTL_SOURCE + '/export/FtlRenderer.js').FtlRenderer,
                    '!nodeRenderers': require(FTL_SOURCE + '/export/renderer/index.js').rendererList
                },
                {
                    type: require(FTL_SOURCE + '/export/FtlTransformer.js').FtlTransformer,
                    '!nodeTransformers': require(FTL_SOURCE + '/export/transformer/index.js').transformerList
                }
            ];
        }

        const fixture = projectFixture.createDynamic(options);
        const moduleConfiguration = fixture.context.di.create(FtlModuleConfiguration);
        const renderer = fixture.context.di.create(FtlRenderer);
        const transformer = fixture.context.di.create(FtlTransformer);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration, renderer, transformer);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration, renderer, transformer];
        }
    }
    exporterSpec(FtlExporter, 'export/FtlExporter', prepareParameters);


    /**
     * FtlExporter Test
     */
    function expectFixture(fixture, entityQuery, macroQuery, settings)
    {
        const promise = co(function*()
        {
            const testee = new FtlExporter(...prepareParameters(undefined, true));
            const result = yield testee.export('base', entityQuery, macroQuery, settings);
            if (UPDATE_SPECS)
            {
                fs.writeFileSync(FTL_FIXTURES + '/exporter/' + fixture + '.expected.j2', result.contents, { encoding: 'utf8' });
            }
            expect(result.contents).to.be.equal(fs.readFileSync(FTL_FIXTURES + '/exporter/' + fixture + '.expected.j2', { encoding: 'utf8' }));
            return result;
        });
        return promise;
    }

    describe('#export', function()
    {
    });
});
