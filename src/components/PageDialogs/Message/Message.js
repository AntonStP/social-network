import classNames from "classnames";

function Message({text, id}) {
    return (
        <div className={classNames("message", {
            "message_user": id==="my-id"
        })}>{text}</div>
    );
}

export default Message;