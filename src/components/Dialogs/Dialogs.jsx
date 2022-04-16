import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.items}>{dialogElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
        </div>
      </div>
      <div className={s.post_text}>
        <h2>Write your message</h2>
        <textarea value={newMessageBody} onChange={onNewMessageChange} />
        <div className={s.add_msg_btn}>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
