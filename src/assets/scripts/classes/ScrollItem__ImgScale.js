import gsap from 'gsap';

import Maths from '../utils/Maths';
import ScrollItem from './ScrollItem';

class ScrollItem__ImgScale extends ScrollItem {
    img;

    constructor(target, index) {
        super(target, index);

        this.img = target.querySelector('img');
    }

    update(element, props) {
        super.update(element, props);

        // ---- 1 ---- //
        const p = element.progress.toFixed(2);
        console.log(p);
        gsap.to(this.img, {
            scaleX: p,
            scaleY: p
        });

        // ---- 2 ---- //
        // const p = element.progress.toFixed(2);
        // const scale = Maths.map(p, 0, .5, .25, 1)
        // console.log(p, scale);
        // gsap.to(this.img, {
        //     scaleX: scale,
        //     scaleY: scale
        // });

        // ---- 3 ---- //
        // const p = element.progress.toFixed(2);
        // const scale = Maths.clamp(Maths.map(p, .25, .5, .5, 1), .5, 1);
        // console.log(p, scale);
        // gsap.to(this.img, {
        //     scaleX: scale,
        //     scaleY: scale
        // });
    }
}

export default ScrollItem__ImgScale;
