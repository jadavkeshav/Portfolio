import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'SocialLinks',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'ProfileURL',
      type: 'url',
    }),
  ],
})
