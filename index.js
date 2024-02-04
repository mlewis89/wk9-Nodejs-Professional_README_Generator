const inquirer = require('inquirer');
const fs =  require('fs');

inquirer
    prompt{[
        {
            //Project title
            type: 'input',
            name: 'name',
      message: 'What is your name?',
        },
        {
            //description,
            type: 'input',
            name: 'description',
      message: 'What is your name?',
        },
        {
            //=installation instructions, 
            type: 'input',
            name: 'installation',
      message: 'What is your name?',
        },
        {
            //usage information, 
            type: 'input',
            name: 'usage',
      message: 'What is your name?',
        },
        {
            //contribution guidelines, 
            type: 'input',
            name: 'contribution',
      message: 'What is your name?',
        },
        {
            //test instructions, 
            type: 'input',
            name: 'testing',
      message: 'What is your name?',
        },
        {
            //license, 
            type: 'list',
            name: 'licence',
      message: 'What is your name?',
        },
        {
            //GitHub username,  
            type: 'input',
            name: 'gitHubUser',
      message: 'What is your name?',
        },
        {
            //email address
            type: 'input',
            name: 'emasil',
      message: 'What is your name?',
        }

    ]}
    .then((answers)=> {
        const filename = `${answers.gitHubUser.toLowerCase().split(' ').join('')}} ${answers.projectTiltle.toLowerCase().split(' ').join('-')}}`;

    })