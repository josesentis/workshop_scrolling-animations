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
    // this.mouse = {
    //   x: window.innerWidth / 2,
    //   y: window.innerHeight / 2,
    // };

    container.addEventListener('mousemove', (e) => {
      // ---- 1 ---- //
      gsap.set(this.targets, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      });

      // ---- 2 ---- //
      // this.mouse.x = e.clientX - window.innerWidth / 2;
      // this.mouse.y = e.clientY - window.innerHeight / 2;

    }, true);

    // ---- 2 ---- //
    // gsap.ticker.add(() => { Main.loop() });
  }

  static loop() {
    // ---- 2 ---- //
    // this.x = Maths.normalize(0, window.innerWidth, this.mouse.x) * 100;
    // this.y = Maths.normalize(0, window.innerHeight, this.mouse.y) * 100;

    // for (let i = 0; i < this.targets.length; i++) {
    //   const box = this.targets[i];
    //   gsap.set(box, {
    //     x: `${this.x}%`,
    //     y: `${this.y}%`
    //   });
    // }

    // ---- 3 ---- //
    // const x = Maths.normalize(0, window.innerWidth, this.mouse.x) * 100;
    // const y = Maths.normalize(0, window.innerHeight, this.mouse.y) * 100;

    // this.x = Maths.lerp(this.x, x, 0.05);
    // this.y = Maths.lerp(this.y, y, 0.05);

    // for (let i = 0; i < this.targets.length; i++) {
    //   const box = this.targets[i];
    //   gsap.set(box, {
    //     x: this.x,
    //     y: this.y
    //   });
    // }
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
