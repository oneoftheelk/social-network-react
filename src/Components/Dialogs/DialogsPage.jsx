import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import style from './DialogsPage.module.css';

const DialogsPage = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(item => {
        return <DialogsItem name={item.name} id={item.id} />
    });

    let messagesElement = state.messages.map(item => {
        return <MessagesItem message={item.message} from={item.from} />
    })

    let addMessage = (executor) => {
        props.addMessage(executor);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.dialogsMessage}>
                <button onClick={ () => addMessage("me") }>Message from me</button>
                <button onClick={ () => addMessage("friend") }>Message from friend</button>
                {messagesElement}
            </div>
        </div>
    );
}

export default DialogsPage;