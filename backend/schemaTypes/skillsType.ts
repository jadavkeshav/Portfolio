import { defineField, defineType } from 'sanity';

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      type: 'string',
      title: 'Skill Name',
      options: {
        list: [
          // Existing skills
          { title: 'Adobe XD', value: 'adobe-xd' },
          { title: 'Adobe Audition', value: 'adobe-audition' },
          { title: 'After Effects', value: 'after-effects' },
          { title: 'Angular', value: 'angular' },
          { title: 'AWS', value: 'aws' },
          { title: 'Azure', value: 'azure' },
          { title: 'Blender', value: 'blender' },
          { title: 'Bootstrap', value: 'bootstrap' },
          { title: 'Bulma', value: 'bulma' },
          { title: 'C', value: 'c' },
          { title: 'Canva', value: 'canva' },
          { title: 'CapacitorJS', value: 'capacitorjs' },
          { title: 'CoffeeScript', value: 'coffeescript' },
          { title: 'C++', value: 'cplusplus' },
          { title: 'C#', value: 'csharp' },
          { title: 'CSS', value: 'css' },
          { title: 'Dart', value: 'dart' },
          { title: 'Deno', value: 'deno' },
          { title: 'Django', value: 'django' },
          { title: 'Docker', value: 'docker' },
          { title: 'Fastify', value: 'fastify' },
          { title: 'Figma', value: 'figma' },
          { title: 'Firebase', value: 'firebase' },
          { title: 'Flutter', value: 'flutter' },
          { title: 'GCP', value: 'gcp' },
          { title: 'GIMP', value: 'gimp' },
          { title: 'Git', value: 'git' },
          { title: 'Go', value: 'go' },
          { title: 'GraphQL', value: 'graphql' },
          { title: 'Haxe', value: 'haxe' },
          { title: 'HTML', value: 'html' },
          { title: 'Illustrator', value: 'illustrator' },
          { title: 'Ionic', value: 'ionic' },
          { title: 'Java', value: 'java' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'Julia', value: 'julia' },
          { title: 'Kotlin', value: 'kotlin' },
          { title: 'Lightroom', value: 'lightroom' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Material UI', value: 'materialui' },
          { title: 'MATLAB', value: 'matlab' },
          { title: 'MemSQL', value: 'memsql' },
          { title: 'Microsoft Office', value: 'microsoftoffice' },
          { title: 'MongoDB', value: 'mongodb' },
          { title: 'MySQL', value: 'mysql' },
          { title: 'Next.js', value: 'nextjs' },
          { title: 'NGINX', value: 'nginx' },
          { title: 'NumPy', value: 'numpy' },
          { title: 'Nuxt.js', value: 'nuxtjs' },
          { title: 'OpenCV', value: 'opencv' },
          { title: 'Photoshop', value: 'photoshop' },
          { title: 'PHP', value: 'php' },
          { title: 'PicsArt', value: 'picsart' },
          { title: 'PostgreSQL', value: 'postgresql' },
          { title: 'Premiere Pro', value: 'premierepro' },
          { title: 'Python', value: 'python' },
          { title: 'PyTorch', value: 'pytorch' },
          { title: 'React', value: 'react' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Selenium', value: 'selenium' },
          { title: 'Sketch', value: 'sketch' },
          { title: 'Strapi', value: 'strapi' },
          { title: 'Svelte', value: 'svelte' },
          { title: 'Swift', value: 'swift' },
          { title: 'Tailwind', value: 'tailwind' },
          { title: 'TensorFlow', value: 'tensorflow' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Unity', value: 'unity' },
          { title: 'Vite.js', value: 'vitejs' },
          { title: 'Vue', value: 'vue' },
          { title: 'Vuetify.js', value: 'vuetifyjs' },
          { title: 'Webix', value: 'webix' },
          { title: 'Wolfram Alpha', value: 'wolframalpha' },
          { title: 'WordPress', value: 'wordpress' },

          // Full Stack Java Development Skills
          { title: 'Spring Framework', value: 'spring-framework' },
          { title: 'Hibernate', value: 'hibernate' },
          { title: 'JPA', value: 'jpa' },
          { title: 'Maven', value: 'maven' },
          { title: 'Gradle', value: 'gradle' },
          { title: 'Thymeleaf', value: 'thymeleaf' },
          { title: 'JavaServer Faces (JSF)', value: 'jsf' },
          { title: 'Java EE', value: 'java-ee' },
          { title: 'RESTful APIs', value: 'restful-apis' },
          { title: 'SOAP APIs', value: 'soap-apis' },

          // Android / Mobile App Development Skills
          { title: 'Android Studio', value: 'android-studio' },
          { title: 'Kotlin', value: 'kotlin' },
          { title: 'Java', value: 'java' },
          { title: 'XML', value: 'xml' },
          { title: 'Android SDK', value: 'android-sdk' },
          { title: 'Retrofit', value: 'retrofit' },
          { title: 'Firebase', value: 'firebase' },
          { title: 'JUnit', value: 'junit' },
          { title: 'Espresso', value: 'espresso' },
          { title: 'Mockito', value: 'mockito' },
          { title: 'Gradle', value: 'gradle' },

          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Database', value: 'database' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.custom(category => {
        return category ? true : 'Category is required';
      }),
    }),
    defineField({
      name: 'customSkill',
      type: 'string',
      title: 'New Skill',
      description: 'Please specify your skill if you selected "Other".',
      hidden: ({ document }) => document?.skill !== 'other', // Show only if 'Other' is selected in the skill field
      validation: Rule => Rule.custom(newSkill => {
        return newSkill ? true : 'New skill is required when "Other" is selected';
      }),
    }),
    defineField({
      name: 'skillImage',
      type: 'image',
      title: 'Skill Image',
      description: 'Upload an image representing this skill.',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'skill',
      customSkill: 'customSkill',
      media: 'skillImage',
    },
    prepare(selection) {
      const { title, customSkill, media } = selection;
      const finalTitle = title === 'other' && customSkill ? customSkill : title;
      return {
        title: finalTitle,
        media: media,
      };
    },
  },
});

// Hook to set the skill name and document title
export const skillsDocument = {
  actions: [
    {
      name: 'setSkillName',
      action: async (context) => {
        const { document } = context;
        if (document.skill === 'other' && document.customSkill) {
          document.skill = document.customSkill; // Set skill name to custom skill if "Other" is selected
          document._type = document.customSkill; // Set document name to the custom skill name
        }
      },
    },
  ],
};