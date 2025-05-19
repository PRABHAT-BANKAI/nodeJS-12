const auth = (req, res, next) => {
  console.log(req.body)

  if(req.body.name == "batman"){
  next()
  }else{
    console.log("Unauthorized");
    res.send("Unauthorized");
  }

  // Check if the user is authenticated // middleware function

  // let userName = "batman";
  // let password = "1235";

  // if (userName === "batman" && password === "12345") {
  //   next(); // if the user is authenticated, call the next middleware function
  // } else {
  //   console.log("Unauthorized"); // log unauthorized access
  //   res.send("Unauthorized"); // if the user is not authenticated, send a 401 Unauthorized response
  // }


  // if(12%2 === 1){
  //   next(); // if the user is authenticated, call the next middleware function
  // }
  // else {
  //   console.log("Unauthorized"); // log unauthorized access
  //   res.send("Unauthorized"); // if the user is not authenticated, send a 401 Unauthorized response
  // }
};

module.exports = auth; // export the auth middleware function
