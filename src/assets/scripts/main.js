import Scroll from "./classes/Scroll";

export default class Main {
  scroll;

  static init() {
    this.scroll = new Scroll();
    this.scroll.init();
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
