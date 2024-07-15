let store = {
    state: {
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
    addPost(message) {
        const newPost = {
            id: this.state.posts.length-1,
            message: message,
            likes: 0
        }
        this.state.posts.push(newPost);
    }
}


// Функция для автоматического биндинга всех методов объекта
function bindMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key] = obj[key].bind(obj);
        }
    }
}
// Применяем биндинг ко всем методам store
bindMethods(store);

export const {addPost} = store;
export default store;
