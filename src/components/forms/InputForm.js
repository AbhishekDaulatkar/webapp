import React from "react";
import { useState } from "react";

const InputForm = (props) => {
  const [title,setTitle] = useState('');
  const [name, setName] = useState("");
  const [Dob, setDob] = useState("");
  // const xyz = () => console.log(title,name,Dob);

   const titleChangehandler = (event) => { // event is object returned by the browser
      // console.log(event.target.value);
   setTitle(event.target.value);
   }

   const nameChangehandler = (event) => {
     // event is object returned by the browser
     setName(event.target.value);
   };

    const dateChangehandler = (event) => {
      // event is object returned by the browser
      setDob(event.target.value);
    };
  //========//

  // const [userInput, setUserInput] = useState({
  //   setTitle: "",
  //   setName: "",
  //   setDob: "",
  // });

  // const titleChangehandler = (event) => {
  //   // event is object returned by the browser

  //   setUserInput({
  //     ...userInput,
  //     setTitle: event.target.value,
  //   });
  // };

  // const nameChangehandler = (event) => {
  //   // event is object returned by the browser

  //   setUserInput({
  //     ...userInput,
  //     setName: event.target.value,
  //   });
  // };
  // const dateChangehandler = (event) => {
  //   // event is object returned by the browser

  //   setUserInput({
  //     ...userInput,
  //     setDob: event.target.value,
  //   });
  // };

  //** */
  //  const [userInput, setUserInput] = useState({
  //    //---------PREFERRED WAY OF UPDATING STATE
  //    setTitle: "",
  //    setName: "",
  //    setDob: "",
  //  });
  //    const titleChangehandler = (event) => {
  //      // event is object returned by the browser

  //      setUserInput((prevState)=> {
  //       ...prevState, setTitle: event.target.value
  //      })
  //    };


       

       const submitHandler = (event) =>{
          event.preventDefault(); // To prevent the default action.
                  const expenseData = {
            // ...userInput,
            Title: title,
            Name: name,
            Date : new  Date(Dob),
          };
          props.onSaveExpenseData(expenseData);
          setDob("");
          setName("");
          setTitle("");
        }
         
        
        
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={titleChangehandler} />
        </div>

        <div>
          <label>Name : </label>
          <input type="text" value={name} onChange={nameChangehandler} />
        </div>

        <div>
          <label>DOB : </label>
          <input
            type="date"
            value={Dob}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandler}
          />
        </div>

        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
  }
  export default InputForm;