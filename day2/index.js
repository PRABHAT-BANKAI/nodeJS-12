// core modules , local modules , third party modules

let http = require("http"); // core module ex http , fs(filesystem), path

// third party modules ex : express , multer , nodemon

let { sum, sub, db, mul } = require("./sum"); // local modules. sum , sub ,db

http
  .createServer((req, res) => {
    res.write("hello world");

    res.end();
  })
  .listen(8080, (error) => {
    if (error) {
      console.log("server is not connected ");

      return;
    }
    console.log(sum(10, 5));
    console.log(sum(10, 5));
    console.log(sub(25, 5));
    console.log(sub(25, 5));
    console.log(mul(41, 5));
    db();
    console.log("server is connected");
  });

// local modules
