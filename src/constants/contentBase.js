export const  profile = {
        user: {
            info: {
                name: {el: "Имя", value: "Иван"},
                familyName: {el: "Фамилия", value: "Иванов"},
                surname: {el: "Отчество", value: "Иванович"},
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

export const users = [
    {
        id: "elizaveta",
        info: {
            name: {el: "Имя", value: "Елизавета"},
            familyName: {el: "Фамилия", value: "Елизавета"},
            surname: {el: "Отчество", value: "Елизавета"},
            birthday: {el: "Дата рождения", value: "16.05.1996"},
            city: {el: "Город", value: "Голопопинск"},
        },
        avatar: 'https://i.pinimg.com/474x/fa/05/bf/fa05bfe974888306512a2c71d0d39f53.jpg'
    },
    {
        id: "alexey",
        info: {
            name: {el: "Имя", value: "Алексей"},
            familyName: {el: "Фамилия", value: "Алексей"},
            surname: {el: "Отчество", value: "Алексей"},
            birthday: {el: "Дата рождения", value: "16.05.1996"},
            city: {el: "Город", value: "Голопопинск"},
        },
        avatar: 'https://w7.pngwing.com/pngs/975/683/png-transparent-skull-and-bones-skull-and-crossbones-human-skull-symbolism-skull-thumbnail.png'
    }
];

export const dialogs=  {
        list: [
            {
                id: "elizaveta",
                messages: [
                    {
                        id: "elizaveta",
                        text: "Привет"
                    }
                ]
            },

            {
                id: "alexey",
                messages: [
                    {
                        id: "alexey",
                        text: "Привет 2"
                    }
                ]
            },
        ],
    };