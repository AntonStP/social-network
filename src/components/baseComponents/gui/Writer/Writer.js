import Button from "../Button/Button";

function Writer({value, onChange, onCLick, inputRef}) {


    return (
        <div className="writer">
            <div className={"writer__textarea-box"}>
                <textarea className={"writer__textarea"} value={value} onChange={onChange} ref={inputRef}/>
            </div>
            <Button text={"Отправить"} className={"writer__button button_writer"} onCLick={onCLick}/>
        </div>
    );
}

export default Writer;