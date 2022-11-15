class ScrollItem {
    target;
    id;
    index;
    isVisible = false;

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

    update(element, props) {
        if (!this.isVisible) {
            this.show();
            this.isVisible = true;
        }

        // console.log('Progress', element.progress);
    }

    show() { }
}

export default ScrollItem;
