import gsap from 'gsap';

import Maths from '../utils/Maths';
import ScrollItem from './ScrollItem';

class ScrollItem__SliderFade extends ScrollItem {
    img;
    items;
    holder;

    constructor(target, index) {
        super(target, index);

        this.img = target.querySelector('img');
        this.items = target.querySelectorAll('[data-scroll-slider]');
        gsap.set(this.items, { opacity: 0 });
    }

    update(element, props) {
        super.update(element, props);

        // ---- 1 ---- //
        const p = parseInt(Maths.lerp(0, this.items.length, element.progress));
        console.log(p);
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (i === p) gsap.to(item, { opacity: 1 });
            else gsap.to(item, { opacity: 0 });
        }
    }
}

export default ScrollItem__SliderFade;
