import {safeHTML} from "../../../../utils/safeHTML";

function Header({title}) {
    return (
        <header className={"header"}>
            <h1 className={'header__title'}>{safeHTML(title)}</h1>
        </header>
    );
}

export default Header;