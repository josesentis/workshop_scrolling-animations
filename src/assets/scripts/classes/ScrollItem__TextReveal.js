import gsap, { Power2 } from 'gsap';

import ScrollItem from './ScrollItem';

class ScrollItem__TextReveal extends ScrollItem {
    title;
    texts;

    constructor(target, index) {
        super(target, index);

        this.title = target.querySelector('.title');
        gsap.set(this.title, { opacity: 0 });

        this.texts = target.querySelectorAll('p');
        gsap.set(this.texts, { opacity: 0 });
    }

    update(element) {
        super.update(element)
    }

    show() {
        super.show();

        gsap.to(this.title, {
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: Power2.easeOut
        });

        for (let i = 0; i < this.texts.length; i++) {
            const t = this.texts[i];
            gsap.to(t, {
                opacity: 1,
                duration: 1,
                delay: .5 + i * 0.05,
                ease: Power2.easeOut
            });
        }
    }
}

export default ScrollItem__TextReveal;
