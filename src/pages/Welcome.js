import { useRef , useState } from "react";
import {Button} from "../components/Button";
import {Output} from "../components/Output";
import {Input} from "../components/Input";

export const Welcome=() =>{
    let first =useRef("");
    let last =useRef("");
    const [firstname, setfirstname] =useState("");
    const [lastname, setlastname] =useState("");

    let name= `${firstname} ${lastname}`
    function setname(){
        setfirstname(first.current);
        setlastname(last.current);
    }

    function setclear(){
        setfirstname("");
        setlastname("");
    }
    return(
        <div class="container">
            <Output text = "First Name" />
            <Input onChange ={event => {first.current= event.target.value;}}/>
            <Output text = "Last Name" />
            <Input onChange ={event => {last.current= event.target.value;}}/>
            <br/>
            <Button callme={setname} color='primaryn' text="Greet"/>
            <Button callme={setclear} color='danger' text="Clear"/>
            <br/>
            <Output text = {"WELCOME " + name}/>

        </div>

    )

}