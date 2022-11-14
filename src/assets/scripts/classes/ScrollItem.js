class ScrollItem {
    target;
    id;
    index;

    constructor(target, index) {
        this.target = target;
        this.index = index;

        this.id = target.id;
        if (this.id === '') {
            this.id = `block-${Date.now()}-${this.index}`;
            target.setAttribute('id', this.id);
        }
        target.dataset.scrollId = this.id;
    }

    update(element) {
        console.log('Progress', this.id, element.progress);
    }
}

export default ScrollItem;