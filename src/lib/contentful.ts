import { createClient } from 'contentful';

interface Program {
  title: string;
  description: string;
  imageUrl: string;
}

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are missing');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getPrograms(): Promise<Program[]> {
  const entries = await client.getEntries({ content_type: 'ourPrograms' });
  return entries.items.map((item) => ({
    title: String(item.fields.title ?? ''),
    description: String(item.fields.description ?? ''),
    imageUrl:
      item.fields.image?.fields?.file?.url
        ? 'https:' + String(item.fields.image.fields.file.url)
        : '',
  })) as Program[];
}