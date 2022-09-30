import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"


const AddUser = (props) =>{
    const [user, setUser] = useState('')

    const addUserHandler =(event) =>{
      event.preventDefalut(); 
    }

    return(
        <Card className= {classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username </label>
                <input type="text" id="username"/> 
                <label htmlFor="age" >Age (Years)</label>
                <input id="age" type="number" required/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;