const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {

    try {

        const data = await fsPromises.readFile(path.join(__dirname,'TextFiles','hello.txt'),'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname,'TextFiles','enjoy.txt'),'Enjoy the work!')
            console.log('Write complete')
        await fsPromises.appendFile(path.join(__dirname,'TextFiles','enjoy.txt'),'\nThank you!')
                console.log('Append complete')  
        await fsPromises.rename(path.join(__dirname,'TextFiles','enjoy.txt'),path.join(__dirname,'TextFiles','thanks.txt'))
                    console.log('Rename complete')  
        await fsPromises.unlink(path.join(__dirname,'TextFiles','hello.txt'))
        console.log('Delete complete')    
    } catch(err) {
        console.error(err)
    }
}
fileOps()



//Exit on uncaught errors
process.on('uncaughtException', err => {

    console.error(`There is an uncaught error: ${err}`)
    process.exit(1)
    
    
    }) 