// Membuat Object Dengan Constructor Function

function construcColor (r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

construcColor.prototype.rgb = function (){
    const {r,g,b} = this; //destruc
    return `rgb ${r}, ${g}, ${b}`;
}

construcColor.prototype.hex = function (){
    const {r,g,b} = this; //destruc
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

construcColor.prototype.rgba = function (a = 1.0){//contras
    const {r,g,b} = this;
    return `rgba ${r}, ${g}, ${b}, ${a}`;
    
}

const objColor = new construcColor(66,666,666);

console.log(objColor.rgb())
console.log(objColor.hex())
console.log(objColor.rgba())


