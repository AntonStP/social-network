import classNames from "classnames";
import {safeHTML} from "../../../../utils/safeHTML";

function Button({className, children, text, onCLick}) {
    return (
        <button className={classNames('button', className)} onClick={onCLick}>
            {text && <div className={'button__text'}>{safeHTML(text)}</div>}
            {children}
        </button>
    );
}

export default Button;