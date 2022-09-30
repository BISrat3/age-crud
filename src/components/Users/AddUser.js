import React, {useState} from "react";

const AddUser = (props) =>{

    const addUserHandler =(event) =>{
      event.preventDefalut(); 
    }

    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username </label>
            <input type="text" id="username"/> 
            <label htmlFor="age" >Age (Years)</label>
            <input id="age" type="number" required/>
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;