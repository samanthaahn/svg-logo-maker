const inquirer = require('inquirer');
const fs = require('fs');

// const generateReadMe = ({ title, description, installation, usage, contributing, tests, license }) => 

// `# ${title}

// ## Description
// ${description}

// ## Installation
// ${installation}

// ## Usage
// ${usage}

// ## Contributing
// ${contributing}

// ## Tests
// ${tests}

// ## License
// ${license}`;



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
    type: 'input',
    name: 'shape',
    message: 'What shape would you like?'
},
{
    type: 'input',
    name: 'shape color',
    messag: 'What color would you like your shape to be?',
},

])
.then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('/dist/readme.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md file!')
    );
});

