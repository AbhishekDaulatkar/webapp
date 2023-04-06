import React from "react";
import { useState } from "react";

export default function InputForm() {
    
    // const [title,setTitle] = useState('');
    // const [name, setName] = useState("");
    // const [Dob, setDob] = useState("");
    // const xyz = () => console.log(title,name,Dob);


        //  const titleChangehandler = (event) => { // event is object returned by the browser
        //     console.log(event.target.value);
        //  setTitle(event.target.value);   
        //  }
     
     
        //  const nameChangehandler = (event) => {
        //    // event is object returned by the browser
        //    setName(event.target.value);
        //  };
        
        //   const dateChangehandler = (event) => {
        //     // event is object returned by the browser
        //     setDob(event.target.value);
        //   };
        //========//

        const [userInput, setUserInput]  = useState({
              setTitle : '',
              setName: '',
              setDob: ''

        })
  

               const titleChangehandler = (event) => {
                 // event is object returned by the browser
                 
                 setUserInput({
                   ...userInput,
                   setTitle: event.target.value
                 });
               };

               const nameChangehandler = (event) => {
                 // event is object returned by the browser

                 setUserInput({
                   ...userInput,
                   setName: event.target.value,
                   
                 });
               };
                 const dateChangehandler = (event) => {
                   // event is object returned by the browser

                   setUserInput({
                     ...userInput,
                       setDob: event.target.value,
                   });
                 };

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
                  


               
    return (
      <>
        <forms>
          <div>
            <label>Title: </label>
            <input type="text" onChange={titleChangehandler} />
          </div>

          <div>
            <label>Name : </label>
            <input type="text" onChange={nameChangehandler} />
          </div>

          <div>
            <label>DOB : </label>
            <input type="date" onChange={dateChangehandler} />
          </div>

          <div>
            <button type="submit">
              {" "}
              SUBMIT{" "}
            </button>
          </div>
        </forms>
      </>
    );
}
