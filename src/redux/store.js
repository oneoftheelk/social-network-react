import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import navbarReducer from "./navbarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, why everyone love Dimych?", likeCount: 15},
                {id: 2, message: "This is my first project!", likeCount: 23}
            ],
            newPostCurrentText: ""
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "message1", from: "me"},
                {id: 2, message: "message2", from: "friend"},
                {id: 3, message: "message3", from: "me"}
            ],
            dialogs: [
                {id: 1, name: "Dmitry"},
                {id: 2, name: "Jane"},
                {id: 3, name: "Mary"},
                {id: 4, name: "Ian"},
                {id: 5, name: "Alice"}
            ],
        },
        navbar: {
            friends: [
                {id: 1, name: "Dmitry"},
                {id: 2, name: "Jane"},
                {id: 3, name: "Mary"},
                {id: 4, name: "Ian"},
                {id: 5, name: "Alice"}
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state was changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}

export default store;