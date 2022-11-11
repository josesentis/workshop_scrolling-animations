const Maths = {
    normalize: function (max, min, val) {
        return (val - min) / (max - min);
    },
    lerp: function (s, e, t) {
        return s * (1 - t) + e * t;
    }
}

export default Maths;
