// make custom server using HTTP & fs (file system) module
let http = require("http");
let fs = require("fs"); //File System
let PORT = 8080;

http
  .createServer((req, res) => {
    let filename = "";
    // console.log(req.url);

    // switch (req.url) {
    //   case "/":
    //     filename = "home.html";

    //     break;
    //   case "/about":
    //     filename = "about.html";
    //     break;
    //   case "/features":
    //     filename = "features.html";
    //     break;
    //   case "/contacts":
    //     filename = "contacts.html";
    //     break;

    //   default:
    //     break;
    // }

    // fs.readFile(filename, (err, data) => {
    //   if (!err) {
    //     res.end(data);
    //   }
    // });
    fs.readFile("node.txt", (err, data) => {
      res.write(`${data}`);
      res.end();
    });
  })
  .listen(PORT, (error) => {
    if (error) {
      console.log("server is not connected");
      return;
    }

    console.log("server is connected ", PORT);
  });
