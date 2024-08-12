export const  profile = {
        user: {
            info: {
                name: {el: "Имя", value: "Иван"},
                familyName: {el: "Иванов", value: "Иванов"},
                surname: {el: "Иванович", value: "Иванович"},
                birthday: {el: "Дата рождения", value: "16.05.1996"},
                city: {el: "Город", value: "Голопопинск"},
            },
            avatar: 'https://slovnet.ru/wp-content/uploads/2019/02/21-5.jpg'
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
    };


export const dialogs=  {
        list: [
            {
                id: "elizaveta",
                name: "Елизавета",
                messages: [
                    {
                        text: "Привет"
                    }
                ]
            },

            {
                id: "alexey",
                name: "Алексей",
                messages: [
                    {
                        text: "Привет 2"
                    }
                ]
            },
        ],
    };