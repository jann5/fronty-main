import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from './client';

// Simple type definition for Sanity Image source
export type SanityImageSource = {
    asset: {
        _ref: string;
        _type: string;
    };
};

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
});

export const urlFor = (source: any) => {
    return imageBuilder.image(source).auto('format').fit('max');
};
