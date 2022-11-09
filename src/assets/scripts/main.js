import VirtualScroll from 'virtual-scroll'

export default class Main {
  scroller;
  items;

  static init() {
    const items = document.querySelectorAll('[data-scroll]');

    this.scroller = new VirtualScroll()
    this.scroller.on(event => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.style.transform = `translateY(${event.y}px)`;
      }
    });
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}

