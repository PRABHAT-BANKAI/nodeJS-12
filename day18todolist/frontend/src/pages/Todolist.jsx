import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext";

const Todolist = () => {
  const { token, logout } = useAuth();
  const [todoData, setData] = useState([]);
  const [task, setTask] = useState("");
  async function handleAdd() {
    try {
      let response = await axios.post(
        "http://localhost:8080/api/todo",
        { task: task },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
    setTask("");
  }
  function handleLogout() {
    alert("logout successfully")
    logout();
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.todolist);
      })
      .catch((err) => console.log(err));
  }, [token, todoData]);

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>add task</button>

      <div>
        {todoData.map((item) => {
          return <h1 key={item._id}>{item.task}</h1>;
        })}
      </div>
    </div>
  );
};

export default Todolist;
