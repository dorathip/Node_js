const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'TextFiles','hello.txt'),'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
fs.writeFile(path.join(__dirname,'TextFiles','enjoy.txt'),'Enjoy the work!', (err) => {
    if(err) throw err;
    console.log('Write complete')
    fs.appendFile(path.join(__dirname,'TextFiles','enjoy.txt'),'\nThank you!', (err) => {
        if(err) throw err;
        console.log('Append complete')
        fs.rename(path.join(__dirname,'TextFiles','enjoy.txt'),path.join(__dirname,'TextFiles','thanks.txt'), (err) => {
            if(err) throw err;
            console.log('Rename complete');
        });
    });
});



//Exit on uncaught errors
process.on('uncaughtException', err => {

    console.error(`There is an uncaught error: ${err}`)
    process.exit(1)
    
    
    })