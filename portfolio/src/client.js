import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID || '6mfl02ka',
  dataset: 'production',
  apiVersion: '2024-05-26',
  useCdn: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    console.error('Source is undefined');
    return '/placeholder.png'; // Return a default placeholder image URL
  }
  return builder.image(source);
};
