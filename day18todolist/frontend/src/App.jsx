import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todolist from "./pages/Todolist";
import { AuthProvider } from "./context/Authcontext";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todolist" element={<PrivateRoute><Todolist /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
