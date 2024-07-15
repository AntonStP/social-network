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
        ]
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
