import { Entry, Asset, EntrySkeletonType } from "contentful";

type ContentfulItem = Entry<any> | Asset;

function isEntry(item: any): item is Entry<any> {
  return item && typeof item === "object" && "fields" in item;
}

export function parseContentfulItems(items: unknown[]): Program[] {
  return (items ?? [])
    .filter(isEntry)
    .map((item) => {
      const description =
        "description" in item.fields
          ? String(item.fields.description ?? "")
          : "";

      let imageUrl = "";
      if ("image" in item.fields && item.fields.image && "fields" in item.fields.image) {
        const file = (item.fields.image as Asset).fields.file;
        if (file && "url" in file) {
          imageUrl = `https:${String(file.url)}`;
        }
      }

      return {
        description,
        imageUrl,
      };
    });
}
