class svg {
constructor(){
    this.width = 300;
    this.height = 200;
    this.text = '';
    this.textColor = '';
    this.shape = null;
  
}

setShape(shape){
    this.shape = shape;
}

setText(text, textColor){
    if(text.length > 3){
        throw new Error ("Text must not exceed 3 characters.");
    }
    this.text = text;
    this.textColor = textColor;
}


render(){
    let svgg = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"></svg>`;
    if(this.shape){
        svg += this.shape.render();
    }
}
}

module.exports = svg; 