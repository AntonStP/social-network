import {NavLink} from "react-router-dom";

function Sidebar({links}) {

    return (
        <header className="sidebar">
            <ul className={'sidebar__list'}>
                {links?.map(({link,text},id)=> (
                    <li key={`link-${id}`} className={'sidebar__item'}>
                        <NavLink to={link} className={'sidebar__item-link'}>{text}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Sidebar;
