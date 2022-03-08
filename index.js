// TODO: Include packages needed for this application
const inquirer =  require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = [
// {
//     type: 'input',
//     name: 'github',
//     message: 'What is your GitHub username? (Include your https!)',
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'What is Your Email Please?'
// },
// {
//     type: 'input',
//     name: 'project',
//     message: 'What is the name of your project?',
// },
// {
//     type: 'input',
//     name: 'description',
//     message: 'Give a description of your project for the user:',
// },
// {
//     type: 'list',
//     name: 'license',
//     message: 'What license did you use for this?',
//     choices: ['ISC','MIT','Mozilla']
// },
// {
//     type: 'input',
//     name: 'install',
//     message: 'What command should be run to install dependencies?',
// },
// {
//     type: 'input',
//     name: 'repo',
//     message: 'What should the Repo be about?',
// },
// {
//     type: 'input',
//     name: 'contribution',
//     message: 'What should the user know about repo contribution?',
// },
// {
//     type: 'input',
//     name: 'test',
//     message: 'What command should be run to run tests?',
// },
    
// ]
const questions = () => {
    return inquirer.prompt ([
    {
             type: 'input',
             name: 'Title',
            message: 'What is your title of your project?',
            validate: projTitle  => {
    if(projTitle) {
            return true;
    }else{
            console.log("Please enter the title to your project!");
             return false;  
                }
            }
         },
         {
            type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Include your https!)',
           validate: githubLink  => {
   if(githubLink) {
           return true;
   }else{
           console.log("Please enter the correct github link!");
            return false;  
               }
           }
        },
        {
            type: 'input',
     name: 'install',
    message: 'What command should be run to install dependencies?',
           validate: installData  => {
   if(installData) {
           return true;
   }else{
           console.log("Please enter the instructions on how you would install your project?");
            return false;  
               }
           }
        },
        {
            type: 'input',
            name: 'Title',
           message: 'What is your title of your project?',
           validate: projTitle  => {
   if(projTitle) {
           return true;
   }else{
           console.log("Please enter the title to your project!");
            return false;  
               }
           }
        },
        {
            type: 'input',
                 name: 'description',
                 message: 'Give a description of your project for the user:',
           validate: discripData => {
   if(discripData) {
           return true;
   }else{
           console.log("Please enter a description for your project!");
            return false;  
               }
           }
        },
        {
            type: 'input',
     name: 'contribution',
     message: 'What should the user know about repo contribution?',
           validate: contribData => {
   if(contribData) {
           return true;
   }else{
           console.log("Please list what contributors you want to list?");
            return false;  
               }
           }
        },
        {
            
                     type: 'list',
                     name: 'license',
                    message: 'What license did you use for this?',
                    choices: ['ISC','MIT','Mozilla'],
           validate: licenseData => {
   if(licenseData) {
           return true;
   }else{
           console.log("Please choose which license to your project!");
            return false;  
               }
           }
        },
        {
            type: 'input',
        name: 'tests',
        message: 'What are tests for your application?',
           validate: testData  => {
   if(testData) {
           return true;
   }else{
           console.log("Please enter how to test your project!");
            return false;  
               }
           }
        },
        {
            type: 'input',
              name: 'email',
              message: 'What is Your Email Please?',
           validate: emailData  => {
   if(emailData) {
           return true;
   }else{
           console.log("Please enter your email?");
            return false;  
               }
           }
        },
        ])
        }






// TODO: Create a function to write README file
const writeToFile = ( data)=> {
    fs.writeFile('BestReadMe.md', data, (err) =>{
if (err){
    console.log(err);
    }
    else{
        console.log("You did it  your README has been generated!");
    }    
    })
};

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(answers => {
//         const response = generateMarkdown(answers);
//         console.log(answers);
       
//         writeToFile("BestReadMe.md", generateMarkdown(response));  
//     }
// )}

// Function call to initialize app
questions()
.then(data  =>  {return data})
.then(data => {return generateMarkdown(data)})
        .then(writeReadme => {
            return writeToFile(writeReadme);
        })
        .catch(error => {console.log(error + "Whoops theres a error!")
    })

