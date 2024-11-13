import Button from "../Button/Button";
import {useCallback, useState} from "react";

function Writer({onChange, onCLick}) {
    const [value, setValue] = useState('');

    const click = useCallback(()=> {
        if(value.length===0) return;
        console.log('value', value);
        onCLick(value);
        setValue('');
    },[value, onCLick]);

    return (
        <div className="writer">
            <div className={"writer__textarea-box"}>
                <textarea className={"writer__textarea"} value={value}
                          onChange={e=> setValue(e.target.value)}/>
            </div>
            <Button text={"Отправить"} className={"writer__button button_writer"} onCLick={click}/>
        </div>
    );
}

export default Writer;