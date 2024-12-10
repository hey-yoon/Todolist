import React from 'react';
import S from './style';
import useInput from '../../hooks/useInput';

const TodoInsert = () => {

    const [value,onChangeValue, setValue] = useInput();

    const onPressAddTodo = (e) => {
        if(e.key === 'Enter'){
            if(!window.confirm("이대로 추가하시겠습니까?")) return;
            // 추가하는 로직
            
        }
    }
    return (
        <S.Input type='text' placeholder='할 일을 추가해 볼까요?' value={value} onChange={onChangeValue} onKeyPress={onPressAddTodo}/>
    );
};

export default TodoInsert;