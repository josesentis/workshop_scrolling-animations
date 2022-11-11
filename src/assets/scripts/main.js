import gsap from "gsap";
import { doc } from "prettier";
import Box from "./components/Box";
import Maths from "./utils/Maths";

export default class Main {
  mouse;
  x;
  y;
  targets;

  static init() {
    const container = document.getElementById('container');

    // ---- 1 ---- //
    this.targets = document.querySelectorAll('.__target');

    // ---- 2 ---- //
    // this.x = window.innerWidth / 2;
    // this.y = window.innerHeight / 2;

    // ---- 3 ---- //
    // this.x = window.innerWidth / 2;
    // this.y = window.innerHeight / 2;
    // this.mouse = {
    //   x: window.innerWidth / 2,
    //   y: window.innerHeight / 2,
    // };

    // ---- 4 ---- //
    // this.targets = [];
    // const targets = document.querySelectorAll('.__target');
    // for (let i = 0; i < targets.length; i++) {
    //   const box = new Box(targets[i]);
    //   this.targets.push(box);
    // }

    container.addEventListener('mousemove', (e) => {
      // ---- 1 ---- //
      gsap.set(this.targets, {
        left: e.clientX,
        top: e.clientY
      });

      // ---- 2 ---- //
      // this.x = e.clientX;
      // this.y = e.clientY;

      // ---- 3 ---- //
      // this.mouse.x = e.clientX;
      // this.mouse.y = e.clientY;

    }, true);

    // ---- 2 ---- //
    // gsap.ticker.add(() => { Main.loop() });
  }

  static loop() {
    // ---- 2 ---- //
    // for (let i = 0; i < this.targets.length; i++) {
    //   const box = this.targets[i];
    //   gsap.set(box, {
    //     left: this.x,
    //     top: this.y
    //   });
    // }

    // ---- 3 ---- //
    // this.x = Maths.lerp(this.x, this.mouse.x, .05);
    // this.y = Maths.lerp(this.y, this.mouse.y, .05);

    // for (let i = 0; i < this.targets.length; i++) {
    //   const box = this.targets[i];
    //   gsap.set(box, {
    //     left: this.x,
    //     top: this.y
    //   });
    // }

    // ---- 4 ---- //
    // for (let i = 0; i < this.targets.length; i++) {
    //   const box = this.targets[i];
    //   box.update(this.mouse.x, this.mouse.y);
    // }
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
