const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


inquirer
.prompt([
{
    type: 'input',
    name: 'character',
    message: 'Enter three characters of your choosing',
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color would you like your text to be?'
},
{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like?',
    choices: ['circle', 'square', 'triangle'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like your shape to be?',
},

])
.then((answers) => {
    const svg = new SVG();
    svg.setText(answers.character, answers.textColor);


let finalShape 

if(answers.shape === 'circle'){
    finalShape = new Circle();
}else if(answers.shape === 'square'){
    finalShape = new Square();
}else{
    finalShape = new Triangle();
}

finalShape.setColor(answers.shapeColor);
svg.setShape(finalShape);


const finalSVG = svg.render();
console.log(svg);

    fs.writeFile('logo.svg', finalSVG, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
});

