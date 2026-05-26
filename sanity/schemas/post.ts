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
            type: 'reference',
            to: [{ type: 'category' }],
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
    ],
    preview: {
        select: {
            title: 'title',
            titleEn: 'titleEn',
            media: 'mainImage',
            subtitle: 'category.title',
        },
        prepare(selection) {
            const { title, titleEn, media, subtitle } = selection;
            return {
                title: titleEn ? `${title} / ${titleEn}` : title,
                subtitle: subtitle || 'Sem Categoria',
                media: media,
            }
        }
    },
});
