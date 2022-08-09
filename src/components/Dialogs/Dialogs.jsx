import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>

                <div className={s.dialog + ' ' + s.active}>Николай</div>
                <div className={s.dialog}>Александр</div>
                <div className={s.dialog}>Света</div>
                <div className={s.dialog}>Елена</div>
                <div className={s.dialog}>Софья</div>
                <div className={s.dialog}>Роман</div>

            </div>

            <div className={s.message}>

                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your</div>
                <div className={s.dialog}>Yo</div>

            </div>

        </div>
    )
}

export default Dialogs;