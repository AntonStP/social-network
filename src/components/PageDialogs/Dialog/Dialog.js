import classNames from "classnames";
import {Link} from "react-router-dom";

function Dialog({id, name, active}) {

    return (
        <Link to={`/dialogs/${id}`} className={classNames("dialog", {
            'dialog_active': active
        })}>{name}</Link>
    );
}

export default Dialog;