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
    };