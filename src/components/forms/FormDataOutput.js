import React from "react";

import InputForm from "./InputForm";


const FormDataOutput = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    
    props.onAddExpense(expenseData);
  };
  return (
    <div >
      <InputForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default FormDataOutput;
