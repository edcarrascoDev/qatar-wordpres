export const getImageUrl = (imageObject, not_available_image, thumbnail = '500-500') => {
    if (!!imageObject && Object.keys(imageObject).length) {
        if (imageObject.thumbnails && Object.keys(imageObject.thumbnails).length) {
            return imageObject.thumbnails[thumbnail].signedUrl;
        }

        return image.downloadUrl;
    }

    return not_available_image.url;
};
export const getProductImage = (imageObject, thumbnail = '500x500') => {
    if (!!imageObject && imageObject.src) {
        const { src } = imageObject;
        return `${src.substring(0, src.length - 4)}-${thumbnail}.${src.substring(
            src.length - 3,
            src.length,
        )}`;
    }
};
