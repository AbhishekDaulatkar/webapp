import "./App.css";
import Navbar from "./Navbar.js";
import React from "react";
import { FloatButton } from "antd";
import InputForm from "./components/forms/InputForm";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SignIn from "./SignIn";
import DataPropFile from "./components/states/DataPropFile";
import StateUpdater from "./components/states/StateUpdater";
import FormDataOutput from "./components/forms/FormDataOutput";
const { Header, Content, Footer } = Layout;

function App() {
  const drinkitman = () => {
    alert("DRINK IT UP MANN....!!!");
  };

  const expenseHandler = (expense) => {
   console.log(expense);

  }
  return (
    <>
      <Navbar />
      <FloatButton onClick={drinkitman} />
      <FormDataOutput onAddExpense={expenseHandler} />
    </>
  );
}

export default App;
