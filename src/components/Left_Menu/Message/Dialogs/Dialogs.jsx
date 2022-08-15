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

    let dialogsData = [
        {id: 1, name: 'Николай'},
        {id: 2, name: 'Александр'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Оля'},
        {id: 5, name: 'Евгений'}
    ];

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

            </div>

            <div className={s.message}>

                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message="How is your"/>
                <Message message="Yo"/>
                

            </div>

        </div>
    )
}

export default Dialogs;