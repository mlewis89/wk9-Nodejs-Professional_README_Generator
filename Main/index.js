//include required libraries
const inquirer = require('inquirer');
const fs = require('fs');

//promt the user for inputs
inquirer
    .prompt([
        {
            //GitHub username,  
            type: 'input',
            name: 'gitHubUser',
            message: 'What is your GitHub username?',
        },
        {
            //email address
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            //Project title
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project name?',
        },
        {
            //description,
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            //license, 
            type: 'list',
            name: 'license',
            message: 'Which of the following licenses would you like to use for your project?',
            choices: ['MIT', 'Apache-2.0', 'GPL-2.0', 'BSD-3-clause', 'None']
        },
        {
            //=installation instructions, 
            type: 'input',
            name: 'installation',
            message: 'what command should be run to install dependencies?',
        },
        {
            //test instructions, 
            type: 'input',
            name: 'testing',
            message: 'what command should be used to run tests?',
        },

        {
            //usage information, 
            type: 'input',
            name: 'usage',
            message: 'what does the user need to know about using the repo?',
        },
        {
            //contribution guidelines, 
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to this project?',
        },


    ]
    )
    .then((answers) => { //after user has answered allk questions, generate the readme file.
        const fileName = 'README.md';
        console.log(`Generating ${fileName}......`); //let the user know that their readme is being generated
        
        var ReadMeContent = generateReadMe(answers); //generate the markdown code from the users answers

        //write markdown to file.
        fs.writeFile(fileName, ReadMeContent, (err) => 
            err ? console.log(err) : console.log('Success!') //if error log it, otherwise let the user know its was successfull
        );
    }
    );

//Convert user answers to readme file in markdown format
const generateReadMe = ({projectTitle,description,installation,usage,contribution,testing,license,gitHubUser,email}) => 
`# ${projectTitle}

[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Description
    
${description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#How-to-Contribute)
- [Testing](#Testing)
- [Questions](#Questions)


## Installation

Please run the following command to install the necessary dependancies.
       
    ${installation}

## Usage
    
${usage}

## License
This project is licensed under the ${license}.
    
## How-to-Contribute
    
${contribution}

## Testing
run the following command, inorder test the project:
   
    ${testing}
   
## Questions 
If you have any questions about the repo, open an issue or contact me directly at <${email}>. You can veiw my other work on git hub [${gitHubUser}](https://github.com/${gitHubUser}/)`;






