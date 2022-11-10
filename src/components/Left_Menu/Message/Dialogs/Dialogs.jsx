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

    let dialogs = [
        {id: 1, name: 'Николай'},
        {id: 2, name: 'Александр'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Оля'},
        {id: 5, name: 'Евгений'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let meassagesElement = messages.map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>

                { dialogsElements }

                {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
                <DialogItem name={dialogs[4].name} id={dialogs[4].id} /> */}

            </div>

            <div className={s.message}>

                { meassagesElement }

                {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message="How is your"/>
                <Message message="Yo"/> */}
                

            </div>

        </div>
    )
}

export default Dialogs;