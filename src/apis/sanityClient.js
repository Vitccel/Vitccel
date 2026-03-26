import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
if (!projectId) {
  throw new Error(
    'Missing VITE_SANITY_PROJECT_ID. Copy .env.example to .env in the project root, set your Sanity project ID (sanity.io/manage), then restart the dev server.'
  );
}

const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2024-03-11',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export default client;