import classNames from "classnames";

function Dialog({name, active}) {
    return (
        <div className={classNames("dialog", {
            'dialog_active': active
        })}>{name}</div>
    );
}

export default Dialog;