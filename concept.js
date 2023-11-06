// const crypto = require("crypto");

// const start = Date.now();
// // pbkdf -> password based key derivation function
// // SHA -> secured hashing algo
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// // console.log(Date.now() - start);
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// // console.log(process.env);
// const os = require("os");
// console.log(os.cpus().length);

// process.env.UV_THREADPOOL_SIZE = 20;

// for (let i = 0; i < 10; i++) {
//   //   crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
//   //   console.log(Date.now() - start);
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Iteration-${i + 1}`, Date.now() - start);
//   });
// }

// OS
// const os = require("os");

// console.log(os.cpus(), os.cpus().length);
// console.log(os.totalmem()); // data in bytes
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.networkInterfaces());

// File system module
const fs = require("fs");
// both synchronous and asynchronous

// synchronous
// const files = fs.readdirSync("./");
// console.log(files);

// // asynchronous;
// fs.readdir("./", (err, files) => {
//   if (err) console.log(err);
//   else console.log("files", files);
// });

// read files
// const fileData = fs.readFileSync("./demo.txt", "utf-8");
// console.log(fileData);

// fs.readFile("./demo.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Write the data
// const person = {
//   name: "terminator",
//   age: 2034,
// };

// fs.writeFile("person.json", JSON.stringify(person), (err, data) => {
//   if (err) console.log(err);
//   else console.log("file saved");
// });

// EVENTS
const EventEmitter = require("events");
const emitter = new EventEmitter();

// listening the event
emitter.on("messageReceived", () => {
  console.log("message from client is received");
});

emitter.on("eventWithArgs", (args) => {
  console.log("event with arguments", args);
});

// raise the event
emitter.emit("messageReceived");
emitter.emit("messageReceived");
emitter.emit("eventWithArgs", {
  name: "amazon boss",
  company: "amazon",
});
