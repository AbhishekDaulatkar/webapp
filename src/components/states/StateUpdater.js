import { useState } from "react";
import React from "react";
import { Button } from 'antd';

export default function StateUpdater(dataProp){

    const[value,setValue] = useState(dataProp.value);
    console.log('Executed!!+ value: ') ;

    const ClickHandler = () => {
        setValue('MAGICC_MFFF!!');
        console.log(value);
    }


    return(
       <div>
       
       <Button type="primary" onClick= {ClickHandler}>Update State</Button>
       
       <h2>STATE NOW: {value}</h2>
       
       </div>
    );
}