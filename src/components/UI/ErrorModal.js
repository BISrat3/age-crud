import React from "react";
import Card from "./Card";
import Button from './Button'
import classes from "./ErrorModal"

const ErrorModal = (props) =>{
    return (
    <div>

        <Card className={classes.modal} onClick = {props.onConfirm}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p >
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick= {props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    </div>
    )
}

export default ErrorModal;
