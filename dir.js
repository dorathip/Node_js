const fs = require('fs')


if(fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
    
        if(err) throw err
        console.log('Directory created')
    })
}

if(!fs.existsSync('./new')){
fs.mkdir('./new', (err) => {

    if(err) throw err
    console.log('Directory created')
})

} 

//Exit on uncaught errors
process.on('uncaughtException', err => {

    console.error(`There is an uncaught error: ${err}`)
    process.exit(1)
    
    
    })
