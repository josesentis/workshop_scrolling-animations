import LocomotiveScroll from 'locomotive-scroll';

class Scroll {
    defaults = {
        scrollTime: 1000,
        containerSelector: '[data-scroll-container]',
        progressId: 'ScrollBar',
        progress: true,
        header: true
    }

    constructor(opts = {}) {
        this.direction = 'none';
        this.scrollPosition = 0;

        this.progress = opts.progress || this.defaults.progress;
        this.scrollTime = opts.scrollTime || this.defaults.proscrollTimegressId;
        this.progressId = opts.progressId || this.defaults.progressId;
        this.containerSelector = opts.containerSelector || this.defaults.containerSelector;

        // ----- 2 ----- //
        // this.calcDocumentSizes();
        // window.addEventListener('resize', () => this.calcDocumentSizes());
    }

    init() {
        this.scrollProgress = document.getElementById(this.progressId);

        this.scroller = new LocomotiveScroll({
            el: document.querySelector(this.containerSelector),
            smooth: true,
            tablet: { smooth: true },
            smartphone: { smooth: true },
            getDirection: true
        });

        this.scroller.on('scroll', params => this.scroll(params));

        // ----- 4 ----- //
        // this.scroller.on('call', params => this.call(params));
    }

    destroy() {
        this.scroller.destroy();
    }

    scrollTo(target) {
        this.scroller.scrollTo(target, this.scrollTime);
    }

    scroll(props) {
        // ----- 1 ----- //
        console.log('PROPS', props);

        // ----- 2 ----- //
        // const { direction, scroll } = props;

        // this.scrollPosition = scroll.y;

        // if (scroll.y > 0) document.documentElement.classList.add('_scrolled-v');
        // else document.documentElement.classList.remove('_scrolled-v');

        // if (scroll.x > 0) document.documentElement.classList.add('_scrolled-h');
        // else document.documentElement.classList.remove('_scrolled-x');

        // if (direction === 'up') {
        //     document.documentElement.classList.add('_scrolled-up');
        //     document.documentElement.classList.remove('_scrolled-down');
        //     this.direction = direction;
        // } else if (direction === 'down') {
        //     document.documentElement.classList.remove('_scrolled-up');
        //     document.documentElement.classList.add('_scrolled-down');
        //     this.direction = direction;
        // } else {
        //     document.documentElement.classList.remove('_scrolled-up');
        //     document.documentElement.classList.remove('_scrolled-down');
        // }

        // if (this.progress) this.calcScrollProgress();

        // ----- 2 ----- //
        // console.log(props.currentElements);

        // ----- 3 ----- //
        // const keys = Object.keys(props.currentElements);
        // keys.map(key => {
        //     if (key === 'el0') console.log(key, props.currentElements[key].progress);
        // });
    }

    // ----- 4 ----- //
    // call(props) {
    //     console.log(props);
    //     if (props === 'footer') alert('Footer');
    // }

    // ----- 2 ----- //
    // calcDocumentSizes() {
    //     const { body, documentElement: html } = document;

    //     this.documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    // }

    // calcScrollProgress() {
    //     const progress = Math.abs(this.scrollPosition) / (this.documentHeight - window.innerHeight);
    //     this.scrollProgress.style.transform = `scale3d(${progress}, 1, 1)`;
    // }
}

export default Scroll;