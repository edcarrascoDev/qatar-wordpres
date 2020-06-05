class BaseBlock {
    category = 'qatar';

    constructor() {
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit(params) {
        return <div>EDIT</div>;
    }

    save(params) {
        return <div>SAVE</div>;
    }
}
export default BaseBlock;
