// const eventEmitter = require('events');

// class Person extends eventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }

// }

// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// pedro.on('name',()=>{
//     console.log('My name is '+pedro.name);
// });
// christina.on('name',()=>{
//     console.log('My name is '+christina.name);
// });
// pedro.emit('name');
// christina.emit('name');
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);