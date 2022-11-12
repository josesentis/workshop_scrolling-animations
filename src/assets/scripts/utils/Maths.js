const Maths = {
    normalize: function (max, min, val) {
        return (val - min) / (max - min);
    },
    lerp: function (s, e, t) {
        return s * (1 - t) + e * t;
    },
    map: function (x, a, b, c, d) {
        return ((x - a) * (d - c)) / (b - a) + c;
    }
}

export default Maths;
