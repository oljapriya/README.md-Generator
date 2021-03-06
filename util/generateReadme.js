// TODO: Create a function that returns a license badge based on which license is passed in

function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-green)
  


  ## Description 
  ${answers.description}

  ![caption](https://drive.google.com/file/d/1klr_SEdCqJ3ID8f_wk2y4MleWvp4RRLh/view),
  

  ## Table of Contents
  -[Description] (#description)
  -[Installation] (#installation)
  -[Usage] (#usage)
  -[License] (#license)
  -[Contributing] (#contributing)
  -[Test] (#test)
  -[Questions] (#questions)
  

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## Licence
  ![badge](https://img.shields.io/badge/license-${answers.license}-green)<br/>
  This application is covered by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Test
  ${answers.test}

  ## Qustions
  ${answers.questions}<br/>
  - Find me on GitHub: [${answers.username}] (https://github.com/${answers.username})<br/>
  <br/>

  - Email me with any questions: ${answers.email}
  
  `;
}
module.exports = generateReadme;