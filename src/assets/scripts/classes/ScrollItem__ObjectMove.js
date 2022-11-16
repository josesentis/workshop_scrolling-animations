import gsap from 'gsap';
import Maths from '../utils/Maths';

import ScrollItem from './ScrollItem';

const POSITIONS = [
    {
        x: 30,
        y: 80
    },
    {
        x: 50,
        y: 50
    },
    {
        x: 15,
        y: 75
    },
    {
        x: 80,
        y: 80
    }
]

class ScrollItem__ObjectMove extends ScrollItem {
    object;
    items;
    isShow = false;
    progress;
    x = 0;
    y = 0;

    constructor(target, index) {
        super(target, index);

        this.object = document.getElementById('object');
        this.items = target.querySelectorAll('[data-scroll-object]');
        gsap.set(this.object, { opacity: 0 });

        // ---- 3 ---- //
        // this._loop = () => this.loop();
    }

    update(element, props) {
        super.update(element, props);

        // ---- 1 ---- //
        if (props.scroll.y > element.top && props.scroll.y + window.innerHeight < element.bottom && !this.isShow) {
            gsap.to(this.object, { opacity: 1 });
            this.isShow = true;
        } else {
            gsap.to(this.object, { opacity: 0 });
            this.isShow = false;
        }

        // ---- 2 ---- //
        // const p = parseInt(Maths.lerp(0, this.items.length, element.progress));
        // gsap.set(this.object, {
        //     left: `${POSITIONS[p].x}%`,
        //     top: `${POSITIONS[p].y}%`
        // });

        // ---- 3 ---- //
        // this.progress = element.progress;

        // if (props.scroll.y > element.top && props.scroll.y + window.innerHeight < element.bottom && !this.isShow) {
        //     gsap.to(this.object, { opacity: 1 });
        //     this.isShow = true;
        //     gsap.ticker.add(this._loop);
        // } else {
        //     gsap.to(this.object, { opacity: 0 });
        //     this.isShow = false;
        //     gsap.ticker.remove(this._loop);
        // }
    }

    // ---- 3 ---- //
    // loop() {
    //     const p = parseInt(Maths.lerp(0, this.items.length, this.progress));

    //     this.x = Maths.lerp(this.x, POSITIONS[p].x, .06);
    //     this.y = Maths.lerp(this.y, POSITIONS[p].y, .06);

    //     gsap.set(this.object, {
    //         left: `${this.x}%`,
    //         top: `${this.y}%`
    //     });
    // }
}

export default ScrollItem__ObjectMove;
