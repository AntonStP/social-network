import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useCallback, useMemo} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {useDispatch} from "react-redux";
import {addMessage} from "../../redux/reducer/dialogs";

function PageDialogs({users, list, activeDialog}) {
    const dispatch = useDispatch();

    const _activeDialog = useMemo(()=> {
        if(activeDialog) return activeDialog;
        return list[0].id;
    }, [activeDialog]);

    const listMessages = useMemo(()=> {
        const user = list.filter((el) => el.id===_activeDialog);
        return user[0].messages;
    }, [list, _activeDialog]);

    const sendMessage = useCallback((value)=> {
        dispatch(addMessage(value))
    },[activeDialog]);


    return (
        <section className={"page-dialogs"}>
            <div className={'page-dialogs__list'}>
                {users.map(el => <Dialog key={el.id} {...el} activeDialog={_activeDialog}/>)}
            </div>
            <div className={'page-dialogs__wall'}>
                <SwitchTransition>
                    <CSSTransition key={_activeDialog} timeout={300} classNames={'page-dialogs__messages'}>
                        <div className={'page-dialogs__messages'}>
                            {listMessages.map((el, id) => <Message key={id} {...el}/>)}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className={'page-dialogs__writer'}>
                    <Writer onCLick={sendMessage}/>
                </div>
            </div>
        </section>
    );
}

export default PageDialogs;