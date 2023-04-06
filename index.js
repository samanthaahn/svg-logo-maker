const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt([
{
    type: 'input',
    name: 'character',
    message: 'Enter three characters of your choosing',
},
{
    type: 'input',
    name: 'text color',
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
    name: 'shape color',
    messag: 'What color would you like your shape to be?',
},

])
.then((answers) => {
    fs.writeFile('logo.svg', (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
});

