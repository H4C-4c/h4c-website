import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are missing');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getPrograms() {
  const entries = await client.getEntries({ content_type: 'ourPrograms' });
  return entries.items.map((item) => ({
    title: item.fields.title,
    description: item.fields.description,
    imageUrl: item.fields.image?.fields?.file?.url
      ? 'https:' + item.fields.image.fields.file.url
      : '',
  }));
}