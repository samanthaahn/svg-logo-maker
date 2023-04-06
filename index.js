const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');


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
    messag: 'What color would you like your shape to be?',
},

])
.then((answers) => {
    const svg = new SVG();
    svg.setText(answers.character, answers.textColor);
console.log(svg);
const finalSVG = svg.render();
// ADD LOGIC FO THE SHAPES 

    fs.writeFile('logo.svg', finalSVG, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
});

