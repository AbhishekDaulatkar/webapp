import "./App.css";
import Navbar from "./Navbar.js";
import React from "react";
import { FloatButton } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SignIn from "./SignIn";
const { Header, Content, Footer } = Layout;

function App() {
  const drinkitman = () => {
    alert("DRINK IT UP MANN....!!!");
  };
  return (
    <>
      <Navbar />
      <FloatButton onClick={drinkitman} />
    </>
  );
}

export default App;
