import LocomotiveScroll from 'locomotive-scroll';

export default class Main {
  scroller;

  static init() {
    this.scroller = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      getDirection: true
    });
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
