//Membuat  Object Dengan Factory Function

// const hex = (r,g,b) => {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const rgb = (r,g,b) => {
//     return `rgb ${r}, ${g}, ${b}`;
// };

const convertColor = (r,g,b) => {
    const setColor = {};
    setColor.r = r
    setColor.g = g
    setColor.b = b

    setColor.rgb = function (){//out: 'rgb 11, 22, 33'
        const {r,g,b} = this; //destruc
        return `rgb ${r}, ${g}, ${b}`;
    };

    setColor.hex = function () {//out: '#0b1621'
        const {r,g,b} = this; //destruc
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return setColor;
};

const color = convertColor(11,22,33);
