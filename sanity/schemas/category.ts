import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'category',
    title: 'Categoria',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
        }),
    ],
});
