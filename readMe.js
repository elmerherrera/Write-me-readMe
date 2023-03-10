const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        name:'filePath',
        message:'please enter the file path for the Readme'
    },
    {
        type:'input',
        name:'projecTitle',
        message:'please enter title of your project',
    },
    {
        type:'input',
        name:'description',
        message:'please give us a brief message describing your project',
    },
    {
        type:'input',
        name:'instructions',
        message:'please give us instructions on how to use your project',
    },
])

.then((answers) => {
    const filePath = answers.filePath;
    const projecTitle = answers.projecTitle;
    const description = answers.description;
    const instructions = answers.instructions;
    const fileContent = `# ${projecTitle}\n\n ## Projesct Description\n ${description}\n\n ## Project Instructions \n\n ${instructions}`;

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log (`Readme was created at ${filePath} with custom content from you inputs. Thank you!`)
    });
});

