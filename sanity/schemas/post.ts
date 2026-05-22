import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        // ── Portuguese (required) ───────────────────────────────────────
        defineField({
            name: 'title',
            title: 'Título (PT)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de publicação',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Visto', value: 'Visto' },
                    { title: 'CPT and OPT', value: 'CPT AND OPT' },
                    { title: 'Universidades', value: 'Universidades' },
                    { title: 'Vida nos EUA', value: 'Vida nos EUA' },
                    { title: 'Financeiro', value: 'Financeiro' },
                    { title: 'Dicas', value: 'Dicas' },
                ],
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo (PT)',
            type: 'text',
            rows: 3,
            description: 'Breve descrição exibida nos cards do blog.',
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Texto alternativo (Para SEO e Acessibilidade)' },
                { name: 'caption', type: 'string', title: 'Legenda / Descrição visível (Opcional)' }
            ],
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'object',
            fields: [
                { name: 'name', title: 'Nome', type: 'string' },
                { 
                    name: 'photo', 
                    title: 'Foto', 
                    type: 'image', 
                    options: { hotspot: true },
                    fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }] 
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Conteúdo (PT)',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Citação', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Negrito', value: 'strong' },
                            { title: 'Itálico', value: 'em' },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', type: 'string', title: 'Texto alternativo (SEO)' },
                        { name: 'caption', type: 'string', title: 'Legenda (Aparece abaixo da imagem)' }
                    ],
                },
            ],
        }),

        // ── 🇺🇸 English Version (optional) ─────────────────────────────
        defineField({
            name: 'titleEn',
            title: '🇺🇸 Title (EN)',
            type: 'string',
            description: 'Optional — leave blank to use the Portuguese title as fallback.',
        }),
        defineField({
            name: 'excerptEn',
            title: '🇺🇸 Excerpt (EN)',
            type: 'text',
            rows: 3,
            description: 'Optional — English summary shown on blog cards when the site is in English.',
        }),
        defineField({
            name: 'bodyEn',
            title: '🇺🇸 Content (EN)',
            type: 'array',
            description: 'Optional — English article body. Leave blank to fall back to Portuguese.',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', type: 'string', title: 'Alt text (SEO)' },
                        { name: 'caption', type: 'string', title: 'Caption (Visible description)' }
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'category',
        },
    },
});
