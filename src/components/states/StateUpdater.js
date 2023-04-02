import { useState } from "react";
import { Button, Space } from 'antd';

export default function StateUpdater(props){

    const[value,setValue] = useState(props.value);
    console.alert('Executed!!+ value: ',value) ;

    const ClickHandler = () => {
        setValue('MAGICC MFFF!!');
        console.log(value);
    }


    return(
       <>
       <Space wrap>
       <Button type="primary" onClick= {ClickHandler}>Update State</Button>
       </Space >
       <h2>STATE NOW: {props.value}</h2>
       
       
       
       
       
       
       </>
    );
}