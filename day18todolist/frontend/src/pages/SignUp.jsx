import React from "react";

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up page</h2>
      <form action="">
        <label htmlFor="">
          User Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="">
          Password:
          <input type="text" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
