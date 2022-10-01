import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css"

const UserList = (props) =>{
    return (
    <Card className={classes.users}>
        <ul>
            {props.users.map((users) => (
            <li>
                {users.name} ({users.age} years old)
            </li>))}
        </ul>
    </Card>
    )
}

export default UserList;