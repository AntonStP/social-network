import classNames from "classnames";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {selectDialog} from "../../../redux/reducer/dialogs";

function Dialog({id, name, activeDialog}) {
    const dispatch = useDispatch();

    const click = useCallback((id) => {
        dispatch(selectDialog(id));
    }, [activeDialog]);

    return (
        <Link to={`/dialogs/${id}`} className={classNames("dialog", {'dialog_active': activeDialog === id})}
              onClick={() => click(id)}>
            {name}
        </Link>
    );
}

export default Dialog;