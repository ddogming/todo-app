import { useState } from "react";

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(value.length > 0){
        onInsert(value);
        setValue(""); //null은 통째로 다 사라지는거, 여기서는 "빈 값"을 입력해야됨
        }
    }
    const handleInput = (event)=>{
        setValue(event.target.value);
    }
    return (
        <form className="todo-insert" onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="할 일을 입력하세요" onChange={handleInput}/>
        <button type="submit">+</button>
        </form>
    );
};

export default TodoInsert;