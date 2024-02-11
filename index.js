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

## Description
    
    ${description}
    
## Table of Contents (Optional)
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation
    
    ${installation}
    
## Usage
    
    ${usage}
    
## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
## License
    
    ${licence}
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## How to Contribute
    
    ${contribution}

## Tests
    
    ${testing}
    
If you have any questions please contact me at ${email}, you can veiw my other work on git hub ${gitHubUser}`;






