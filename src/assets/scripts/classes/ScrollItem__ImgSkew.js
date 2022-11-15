import gsap, { Power2 } from 'gsap';

import Maths from '../utils/Maths';
import ScrollItem from './ScrollItem';

class ScrollItem__ImgSkew extends ScrollItem {
    img;

    constructor(target, index) {
        super(target, index);

        this.img = target.querySelector('img');
    }

    update(element, props) {
        super.update(element, props);

        // ---- 1 ---- //
        const s = props.speed.toFixed(2);
        console.log(s);
        gsap.to(this.img, {
            skewX: `${s}deg`
        });

        // ---- 2 ---- //
        // const s = props.speed.toFixed(2) * 5
        // console.log(s);
        // gsap.to(this.img, {
        //     rotateX: `${s}deg`
        // });

        // ---- 3 ---- //
        // const s = Maths.clamp(props.speed.toFixed(2) * 10, -75, 75);
        // console.log(s);
        // gsap.to(this.img, {
        //     rotateX: `${s}deg`
        // });
    }
}

export default ScrollItem__ImgSkew;
