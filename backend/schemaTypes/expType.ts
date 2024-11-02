import { defineField, defineType } from 'sanity';

export const expType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Job Title',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'string',
      title: 'Duration',
      validation: Rule => Rule.required(),
    }),
  ],
});
