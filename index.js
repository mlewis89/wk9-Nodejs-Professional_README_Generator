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
        const folderName = ${answers.gitHubUser.toLowerCase().split(' ').join('')}}_${answers.projectTitle.toLowerCase().split(' ').join('-')};
        const fileName = 'README.md';
        const filePath = `${./${folderName}/${fileName}}`;
        console.log(`Generating ${filePath}......`);
        
        var ReadMeContent = generateReadMe(answers);

        fs.writeFile(filePath, ReadMeContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
    );







