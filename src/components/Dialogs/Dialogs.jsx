import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>

                <DialogItem name="Николай" id="1" />
                <DialogItem name="Александр" id="2" />
                <DialogItem name="Света" id="3" />
                <DialogItem name="Оля" id="4" />
                <DialogItem name="Евгений" id="5" />

            </div>

            <div className={s.message}>

                <Message message="Hi"/>
                <Message message="How is your"/>
                <Message message="Yo"/>
                

            </div>

        </div>
    )
}

export default Dialogs;