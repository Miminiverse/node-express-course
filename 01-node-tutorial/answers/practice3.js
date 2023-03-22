fs = require('fs').promises;

const makeFile = async () => {
    try {
        await fs.writeFile('./content/practice2.txt', "This is the first line \n")
        console.log("File created");
        for ( let i=1; i<=10; i++) {
            fs.writeFile('./content/practice2.txt', `This is line ${i} \n`, { flag: 'a' })
        }
    }
    catch (err) {
        console.log(err);
    }
}

makeFile();