import {defineField, defineType} from 'sanity'

export const personalType = defineType({
  name: 'personalDetails',
  title: 'Personal Details',
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
