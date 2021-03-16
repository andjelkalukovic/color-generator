function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;


// Library: https://github.com/noeldelgado/values.js
// Installation: npm install values.js --save