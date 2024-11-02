import { defineField, defineType } from 'sanity';

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Degree Title',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'string',
      title: 'Duration',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'institution',
      type: 'string',
      title: 'Institution',
      validation: Rule => Rule.required(),
    }),
  ],
});
