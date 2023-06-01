const { Button } = '@wordpress/components';

const getFileButton = (params, event) => {
    const { fileName, placeholder } = params;

    if (typeof fileName !== 'undefined') {
        return (
            <div className="button-container">
                <Button onClick={event} className="button button-large">
                    {fileName}
                </Button>
            </div>
        );
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

export default getFileButton;
