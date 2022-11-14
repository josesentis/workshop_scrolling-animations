import LocomotiveScroll from 'locomotive-scroll';
import ScrollItem from './ScrollItem';
import ScrollItem__TextReveal from './ScrollItem__TextReveal';

class Scroll {
    items = [];
    classes = [];
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

        this.calcDocumentSizes();
        window.addEventListener('resize', () => this.calcDocumentSizes());

        this.classes['default'] = ScrollItem;
        this.classes['text-reveal'] = ScrollItem__TextReveal;

        const items = document.querySelectorAll('[data-scroll]');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            let scrollClass = 'default';
            if (item.dataset.scrollClass !== undefined) {
                scrollClass = item.dataset.scrollClass;
            }

            const scrollItem = new this.classes[scrollClass](items[i], i);
            this.items[scrollItem.id] = scrollItem;
        }
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
        this.scroller.on('call', (func, args, obj) => this.call(func, args, obj));
    }

    destroy() {
        this.scroller.destroy();
    }

    scrollTo(target) {
        this.scroller.scrollTo(target, this.scrollTime);
    }

    scroll(props) {
        // position, limit, speed, direction and currentElements
        const { direction, scroll, limit, currentElements } = props;

        this.scrollPosition = scroll.y;

        if (scroll.y > 0) document.documentElement.classList.add('_scrolled-v');
        else document.documentElement.classList.remove('_scrolled-v');

        if (scroll.x > 0) document.documentElement.classList.add('_scrolled-h');
        else document.documentElement.classList.remove('_scrolled-x');

        if (direction === 'up') {
            document.documentElement.classList.add('_scrolled-up');
            document.documentElement.classList.remove('_scrolled-down');
            this.direction = direction;
        } else if (direction === 'down') {
            document.documentElement.classList.remove('_scrolled-up');
            document.documentElement.classList.add('_scrolled-down');
            this.direction = direction;
        } else {
            document.documentElement.classList.remove('_scrolled-up');
            document.documentElement.classList.remove('_scrolled-down');
        }

        if (this.progress) this.calcScrollProgress();


        const keys = Object.keys(currentElements);
        keys.map(key => {
            const el = currentElements[key];
            this.items[key]?.update(el);
        });
    }

    call(func, args, obj) {
        console.log(func, args, obj);
        this[func](args);
    }

    calcDocumentSizes() {
        const { body, documentElement: html } = document;
        this.documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

    calcScrollProgress() {
        const progress = Math.abs(this.scrollPosition) / (this.documentHeight - window.innerHeight);
        this.scrollProgress.style.transform = `scale3d(${progress}, 1, 1)`;
    }

    footerAnimation(status) {
        document.documentElement.classList[status === 'enter' ? 'add' : 'remove']('page-end');
    }
}

export default Scroll;
