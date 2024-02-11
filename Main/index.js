const inquirer = require('inquirer');
const fs = require('fs');

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
            name: 'licence',
            message: 'Which of the following licences would you like to use for your project?',
            choices: ['MIT', 'Apache-2.0', 'GPL 2.0', 'BSD 3', 'None']
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
    .then((answers) => {
        const fileName = 'README.md';
        console.log(`Generating ${fileName}......`);
        
        var ReadMeContent = generateReadMe(answers);

        fs.writeFile(fileName, ReadMeContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
    );


const generateReadMe = ({projectTitle,description,installation,usage,contribution,testing,licence,gitHubUser,email}) => 
`# ${projectTitle}

![GitHub licence](http://img.sheild.io/badge/license-${licence}-blue.svg)

## Description
    
${description}
    
## Table of Contents
    
[Installation](/README.md#installation)
[Usage](/README.md#usage)
[Credits](/README.md#credits)
[License](/README.md#license)

## Installation

Please run the following command to install the necessary dependancies.
       
    ${installation}

## Usage
    
${usage}

## License
This project is licenced under the ${licence}.
    
## How to Contribute
    
${contribution}

## Tests
run the following command, inorder test the project:
   
    ${testing}
   
## Questions 
If you have any questions about the repo, open an issue or contact me directly at <${email}>. You can veiw my other work on git hub [${gitHubUser}](https://github.com/${gitHubUser}/)`;






