import gsap from 'gsap';

import ScrollItem from './ScrollItem';

class ScrollItem__SliderHorizontalScroll extends ScrollItem {
    img;
    items;
    holder;

    constructor(target, index) {
        super(target, index);

        this.img = target.querySelector('img');
        this.holder = target.querySelector('.holder');
    }

    update(element, props) {
        super.update(element, props);

        const p = element.progress.toFixed(2);
        console.log(p * 100);
        gsap.to(this.holder, {
            translateX: `-${p * 100}%`
        });
    }
}

export default ScrollItem__SliderHorizontalScroll;
