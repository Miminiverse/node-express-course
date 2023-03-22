const object = require('./practice2.js')
const os = require('os')
const {writeFile} = require('fs')

writeFile('./content/practice.txt',  object.sentence + "\n" +  os.userInfo().username, (err, result)=> {
    if (err) {
        console.log(err)
        return
    }
    console.log('done with this task');
})