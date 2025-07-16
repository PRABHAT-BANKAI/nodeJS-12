import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext";

const Todolist = () => {
  const { token } = useAuth();
  const [todoData, setData] = useState([]);

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
  }, [token]);

  return (
    <div>
      <h1>Todolist</h1>

      <div>
        {todoData.map((item) => {
          return <h1 key={item._id}>{item.task}</h1>;
        })}
      </div>
    </div>
  );
};

export default Todolist;
