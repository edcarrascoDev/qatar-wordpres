export const getImageUrl = (imageObject, not_available_image, thumbnail = '500-500') => {
    if (!!imageObject && Object.keys(imageObject).length) {
        if (imageObject.thumbnails && Object.keys(imageObject.thumbnails).length) {
            return imageObject.thumbnails[thumbnail].signedUrl;
        }

        return image.downloadUrl;
    }

    return not_available_image.url;
};
