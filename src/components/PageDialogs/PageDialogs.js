import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useMemo} from "react";

function PageDialogs({list, activeDialog}) {

    //TODO: дописать логику сообщений своих и чужого пользователя
    //TODO: подключитб writer для создания своих новых сообщений

    const _activeDialog = useMemo(()=> {
        if(activeDialog) return activeDialog;
        return list[0].id;
    }, [activeDialog]);

    const listMessages = useMemo(()=> {
        const user = list.filter((el) => el.id===_activeDialog);
        return user[0].messages;
    }, [list, _activeDialog]);


    return (
        <section className={"page-dialogs"}>
            <div className={'page-dialogs__list'}>
                {list.map(el => <Dialog key={el.id} {...el} activeDialog={_activeDialog}/>)}
            </div>
            <div className={'page-dialogs__wall'}>
                <SwitchTransition>
                    <CSSTransition key={_activeDialog} timeout={300} classNames={'page-dialogs__messages'}>
                        <div className={'page-dialogs__messages'}>
                            {listMessages.map((el, id) => <Message key={id} {...el}/>)}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </section>
);
}

export default PageDialogs;