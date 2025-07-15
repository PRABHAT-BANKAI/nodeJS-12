import axios from "axios";
import React, { useState } from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:8080/api/user/login",
        userData
      );
      console.log(response);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
    setUserData({
      userName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <h1>Login page</h1>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="">
          Email:
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
