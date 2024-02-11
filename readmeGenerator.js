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