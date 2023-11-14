import { readFile } from 'node:fs';

readFile('./TextFiles/hello.txt', 'utf8', (err, data) => {
//readFile('./TextFiles/hello.txt', (err, data) => {

  if (err) throw err;
  //console.log(data.toString());
  console.log(data);
  
});


console.log("Hiiiiiii")
//Exit on uncaught errors
process.on('uncaughtException', err => {

console.error(`There is an uncaught error: ${err}`)
process.exit(1)


})