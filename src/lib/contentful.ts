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

function getImageUrl(image: unknown): string {
  if (
    image &&
    typeof image === 'object' &&
    'fields' in image &&
    image.fields &&
    typeof image.fields === 'object' &&
    'file' in image.fields &&
    image.fields.file &&
    typeof image.fields.file === 'object' &&
    'url' in image.fields.file &&
    typeof image.fields.file.url === 'string'
  ) {
    return 'https:' + image.fields.file.url;
  }
  return '';
}

export async function getPrograms(): Promise<Program[]> {
  const entries = await client.getEntries({ content_type: 'ourPrograms' });
  return entries.items.map((item) => ({
    title: String(item.fields.title ?? ''),
    description: String(item.fields.description ?? ''),
    imageUrl: getImageUrl(item.fields.image),
  }));
}