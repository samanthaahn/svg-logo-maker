class svg {
constructor(){
    this.width = 300;
    this.height = 200;
}
render(){
    return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"></svg>`;
}
}

module.exports = svg; 