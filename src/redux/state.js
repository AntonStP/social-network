const store = {
    state: {
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
                    id: 0,
                    message: "я теперь",
                    likes: 2
                },
                {
                    id: 0,
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
        return this.state;
    },
    _addPost(message) {
        const newPost = {
            id: this.state.profile.posts.length-1,
            message: message,
            likes: 0
        }
        this.state.profile.posts.push(newPost);
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            const {message} = action;
            this._addPost(message)
        }
    }
}

store.dispatch = store.dispatch.bind(store)

export const {dispatch} = store;
export default store;
