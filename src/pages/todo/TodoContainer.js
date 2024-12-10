import React, { useEffect, useState } from 'react';
import TodoInsert from './TodoInsert';
import Todo from './Todo';

const TodoContainer = () => {
    
    const [todos,setTodos] = useState([]);

    // 상태관리(CRUD) -> 의존성 배열 추가
    const [isTodoUpdate,setIsTodoUpdate] = useState(false);

    // 데이터를 가져옴
    const getTodos = async() => {
        
        
    }

    // 사이드 이펙트
    // isTodoUpdate의 값이 바뀔때마다 getTodos를 실행
    useEffect(()=>{
        getTodos()
    },[isTodoUpdate])

    return (
        <div>
            <TodoInsert isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} todos={todos} />
            <p className='SubTitle'>남은 할일:<span>{todos && todos.length}</span></p>
            <ul>
                {todos && todos.map((todo,i)=>(
                    <Todo key={i} todo={todo} isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} />
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;