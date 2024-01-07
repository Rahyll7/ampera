import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import HomePage from "./components/homepage";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<HomePage />}></Route> 
        </Routes>
      </BrowserRouter>
  );
};

export default App;
