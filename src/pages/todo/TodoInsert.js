import React from 'react';
import S from './style';
import useInput from '../../hooks/useInput';

const TodoInsert = ({isTodoUpdate, setIsTodoUpdate, todos}) => {

    const [value,onChangeValue, setValue] = useInput();

    const onPressAddTodo = async (e) => {
        if(e.key === 'Enter'){
            if(!window.confirm("이대로 추가하시겠습니까?")) return;
            // 추가하는 로직
            await fetch("http://localhost:8000/todo/insert",{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    id: todos.length + 1,
                    title: value,
                    isChecked: false
                })

            })
            .then((res)=>{
                console.log("리스폰스", res)
                if(!res.ok) return console.log(`Error ${res}`)
                setIsTodoUpdate(!isTodoUpdate);
                setValue("");
            })
            .catch(console.error )
            
        }}

    return (
        <S.Input type='text' placeholder='할 일을 추가해 볼까요?' value={value} onChange={onChangeValue} onKeyPress={onPressAddTodo}/>
    );
};

export default TodoInsert;