const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            //Project title
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?',
        },
        {
            //description,
            type: 'input',
            name: 'description',
            message: 'describe your project?',
        },
        {
            //=installation instructions, 
            type: 'input',
            name: 'installation',
            message: 'how do you install your project?',
        },
        {
            //usage information, 
            type: 'input',
            name: 'usage',
            message: 'How do you use your Project?',
        },
        {
            //contribution guidelines, 
            type: 'input',
            name: 'contribution',
            message: 'How does someelse else contribute to this project?',
        },
        {
            //test instructions, 
            type: 'input',
            name: 'testing',
            message: 'How is testing completed?',
        },
        {
            //license, 
            type: 'list',
            name: 'licence',
            message: 'Which of the following licences would you like to use?',
            choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'SD-2-Clause', 'BSD-3-Clause',
                'BSD-3-Clause-Clear', 'BSD-4-Clause', '0BSD', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0',
                'WTFPL', 'ECL-2.0', 'EPL-1.0', 'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0',
                'LGPL', 'LGPL-2.1', 'LGPL-3.0', 'LPPL-1.3c', 'MS-PL', 'MIT', 'MPL-2.0', 'OSL-3.0', 'PostgreSQL',
                'OFL-1.1', 'NCSA', 'Unlicense', 'Zlib']
        },
        {
            //GitHub username,  
            type: 'input',
            name: 'gitHubUser',
            message: 'What is your github username?',
        },
        {
            //email address
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }

    ]
    )
    .then((answers) => {
        console.log(answers);
        const filename = `${answers.gitHubUser.toLowerCase().split(' ').join('')}}_${answers.projectTitle.toLowerCase().split(' ').join('-')}.md`;
        console.log(filename);

        var ReadMeContent = generateReadMe(answers);

        fs.writeFile(filename, ReadMeContent, (err) =>
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




