import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
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
            title: 'Resumo',
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
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto alternativo',
                },
            ],
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'object',
            fields: [
                { name: 'name', title: 'Nome', type: 'string' },
                { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Conteúdo',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
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
                    fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
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
