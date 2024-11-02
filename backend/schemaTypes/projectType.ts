import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project Name',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tools',
      type: 'array',
      title: 'Tools',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'code',
      type: 'url',
      title: 'Code Repository URL', // or you could make this a string if you want to keep it generic
      description: 'Link to the code repository',
    }),
    defineField({
      name: 'demo',
      type: 'url',
      title: 'Demo URL',
      description: 'Link to the live demo of the project',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      options: {
        hotspot: true, // Enables the user to select a focal point for the image
      },
    }),
  ],
});
