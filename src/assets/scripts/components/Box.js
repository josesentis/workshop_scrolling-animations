import gsap from "gsap";
import Maths from "../utils/Maths";

export default class Box {
    x;
    y;
    target;
    speed;

    constructor(target) {
        this.target = target;
        this.speed = parseFloat(target.dataset.speed);
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }

    update(x, y) {
        this.x = Maths.lerp(this.x, x, this.speed);
        this.y = Maths.lerp(this.y, y, this.speed);

        gsap.set(this.target, {
            left: this.x,
            top: this.y
        });
    }
}
