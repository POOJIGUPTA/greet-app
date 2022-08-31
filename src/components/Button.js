import React from "react";
export const Button = ({color, text, callme})=>{
    const mycolor = `btn btn-${color}`;
    console.log("Render Button");
    return (<button onClick={callme} className={mycolor}>{text}</button> )

}

