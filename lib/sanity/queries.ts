// Basic GROQ tag function for syntax highlighting (mock if next-sanity is missing)
const groq = (strings: TemplateStringsArray, ...keys: any[]) => {
    return strings.reduce((result, str, i) => {
        return result + str + (keys[i] ?? '');
    }, '');
};

// Fetch gallery images based on selected model or wood type
export const galleryImagesQuery = groq`
  *[_type == "realizationImage" && ($model == null || model == $model) && ($wood == null || wood == $wood)] | order(publishedAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    "alt": image.alt,
    model,
    wood
  }
`;

// Fetch all realizations for the main gallery page
export const allRealizationsQuery = groq`
  *[_type == "realization"] | order(date desc) {
    _id,
    title,
    description,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url
  }
`;
