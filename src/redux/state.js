const store = {
    _state: {
        profile: {
            user: {

            },
            posts: [
                {
                    id: 0,
                    message: "Всем привет",
                    likes: 3
                },
                {
                    id: 1,
                    message: "я теперь",
                    likes: 2
                },
                {
                    id: 2,
                    message: "В Тентакле",
                    likes: 6
                },
            ],
        },
        dialogs: {
            list: [
                {
                    id: "1",
                    name: "Челик"
                },
                {
                    id: "2",
                    name: "Человек",
                },
                {
                    id: "3",
                    name: "Другой",
                },
                {
                    id: "4",
                    name: "Альтушка",
                },
                {
                    id: "5",
                    name: "Скуф",
                    active: true
                },
                {
                    id: "6",
                    name: "Леха"
                }
            ],
            messages: [
                {
                    text: 'Привет'
                },
                {
                    text: 'Что такое',
                },
                {
                    text: 'Ипаписа ипакакал'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _addPost(message) {
        const newPost = {
            id: this._state.profile.posts.length,
            message: message,
            likes: 0
        }
        this._state.profile.posts.push(newPost);
    },
    _deletePost(messageId) {
        this._state.profile.posts = this._state.profile.posts.filter((id)=> id !== messageId);
        // this._state.profile.posts = [];
        console.log('this state', this._state)
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            const {message} = action;
            this._addPost(message)
        } else if(action.type === 'DELETE-POST') {
            const {messageId} = action;
            this._deletePost(messageId)
        }
    }
}



store.getState = store.getState.bind(store)
store.dispatch = store.dispatch.bind(store)
export const {getState, dispatch} = store;
export default store;
