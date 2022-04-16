import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: 'Hi, how are you?',
          likes: 12
        },
        {
          id: 2,
          message: 'It is my first post.',
          likes: 11
        },
        {
          id: 3,
          message: 'Blabla',
          likes: 31
        },
      ],
      newPostText: 'lalalala'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('sdfsdf');
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  }
}

export default store;