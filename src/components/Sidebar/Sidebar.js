import { Link } from "react-router-dom";

function Sidebar({links}) {

    console.log('menu', links)
    return (
        <header className="sidebar">
            <ul className={'sidebar__list'}>
                {links?.map(({link,text},id)=> (
                    <li key={`link-${id}`} className={'sidebar__item'}>
                        <Link to={link}>{text}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Sidebar;
