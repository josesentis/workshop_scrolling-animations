import gsap from 'gsap';

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

        const s = Maths.clamp(props.speed.toFixed(2) * 10, -75, 75);
        console.log(s);
        gsap.to(this.img, {
            rotateX: `${s}deg`
        });
    }
}

export default ScrollItem__ImgSkew;
