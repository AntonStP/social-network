import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function PageDialogs({list, messages}) {

    return (
        <section className={"page-dialogs"}>
            <div className={'page-dialogs__list'}>
                {list.map((el, id) => <Dialog key={id} {...el}/>)}
            </div>
            <div className={'page-dialogs__messages'}>
                {messages.map((el, id) => <Message key={id} {...el}/>)}
            </div>
        </section>
);
}

export default PageDialogs;