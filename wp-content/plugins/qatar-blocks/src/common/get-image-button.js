const { Button } = '@wordpress/components';

const getImageButton = (params, event) => {
    const { imageUrl, placeholder } = params;

    if (typeof imageUrl !== 'undefined') {
        return <img src={imageUrl} onClick={event} />;
    } else {
        return (
            <div className="button-container">
                <Button onClick={event} className="button button-large">
                    {placeholder}
                </Button>
            </div>
        );
    }
};

export default getImageButton;
