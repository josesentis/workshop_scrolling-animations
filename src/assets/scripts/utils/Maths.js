const Maths = {
    normalize: function (min, max, val) {
        return (val - min) / (max - min);
    },
    lerp: function (s, e, t) {
        return s * (1 - t) + e * t;
    },
    map: function (x, a, b, c, d) {
        return ((x - a) * (d - c)) / (b - a) + c;
    },
    clamp: function (val, min, max) {
        return Math.min(max, Math.max(min, val));
    }
}

export default Maths;
