import { defineField, defineType } from 'sanity';

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Certificate Title',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'issuedDate',
      type: 'date',
      title: 'Issued Date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'source',
      type: 'string',
      title: 'Issuing Source',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Certificate Image',
      options: {
        hotspot: true, // Enables focal point selection for the image
      },
    }),
  ],
});
