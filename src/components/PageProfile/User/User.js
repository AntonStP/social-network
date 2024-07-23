import parse from "html-react-parser";

function User({info, avatar}) {

    return (
        <div className={"user"}>
            <div className={"user__avatar"}>
                <img src={avatar} alt={''}/>
            </div>
            <ul className={"user__info"}>
                {Object.entries(info).map(([key,value], id)=> (
                    <li key={`info-${id}`} className={'user__info-item user__info-item_'+key}>
                        <div className={'user__info-item-el'}>{parse(value.el)}:</div>
                        <div className={'user__info-item-value'}>{parse(value.value)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;