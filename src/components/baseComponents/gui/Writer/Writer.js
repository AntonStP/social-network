import Button from "../Button/Button";

function Writer({value, onChange, onCLick}) {

    return (
        <div className="writer">
            <div className={"writer__textarea-box"}>
                <textarea className={"writer__textarea"} value={value}
                          onChange={e=> onChange(e.target.value)}/>
            </div>
            <Button text={"Отправить"} className={"writer__button button_writer"} onCLick={onCLick}/>
        </div>
    );
}

export default Writer;