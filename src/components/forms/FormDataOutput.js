import React from "react";

import InputForm from "./InputForm";


const FormDataOutput = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <InputForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default FormDataOutput;
