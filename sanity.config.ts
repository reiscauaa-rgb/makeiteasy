import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
import { PreviewIFrame } from './preview';

export default defineConfig({
    name: 'make-it-easy-blog',
    title: 'Make It Easy USA — Blog',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9xvppnkj',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    basePath: '/studio',

    plugins: [
        structureTool({
            defaultDocumentNode: (S, { schemaType }) => {
                // Adiciona o Preview apenas no schema de post
                if (schemaType === 'post') {
                    return S.document().views([
                        S.view.form(), // Aba normal de edição
                        S.view.component(PreviewIFrame).title('Pré-visualização (Preview)'), // Aba de Preview
                    ]);
                }
                return S.document().views([S.view.form()]);
            },
        })
    ],

    schema: {
        types: schemaTypes,
    },
});
  