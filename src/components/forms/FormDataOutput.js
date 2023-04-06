import React from "react";
export default function FormDataOutput(dataPass) {
    return (
      <>
        <div>{dataPass.title}</div>
        <div>{dataPass.name}</div>
        <div>{dataPass.dob}</div>
      </>
    );
}