import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  async function handleAdd(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8080/api/user",
        userData
      );
      console.log(response);
      alert(response.data.message);
      navigate("/")
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
      <h2>Sign Up page</h2>
      <form onSubmit={handleAdd} action="">
        <label htmlFor="">
          User Name:
          <input
            type="text"
            value={userData.userName}
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
        </label>
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

export default SignUp;
