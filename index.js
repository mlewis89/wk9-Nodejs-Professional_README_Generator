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

        var ReadMe = ``;

        fs.writeFile(filename, generateReadMe(answers), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
    );


function generateReadMe(answers) {
    var readMe = ``;
    return readMe;
}