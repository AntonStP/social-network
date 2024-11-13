import classNames from "classnames";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {selectDialog} from "../../../redux/reducer/dialogs";
import {safeHTML} from "../../../utils/safeHTML";

function Dialog({id, info, activeDialog}) {
    const dispatch = useDispatch();

    const click = useCallback((id) => {
        dispatch(selectDialog(id));
    }, [activeDialog]);

    return (
        <Link to={`/dialogs/${id}`} className={classNames("dialog", {'dialog_active': activeDialog === id})}
              onClick={() => click(id)}>
            {safeHTML(info.name.value)}
        </Link>
    );
}

export default Dialog;