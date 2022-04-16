const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Masha'
    },
    {
      id: 2,
      name: 'Sasha'
    },
    {
      id: 3,
      name: 'Dasha'
    },
    {
      id: 4,
      name: 'Pasha'
    }
  ],
  messagesData: [
    {
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'How are you'
    },
    {
      id: 3,
      message: 'Yo'
    },
  ],
  newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({
        id: 4,
        message: body,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = (text) => {
  return {
    type: SEND_MESSAGE
  }
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
};

export default dialogsReducer;