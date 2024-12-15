import React, { useEffect, useState } from 'react';
import TodoInsert from './TodoInsert';
import Todo from './Todo';
import S from './style';

const TodoContainer = () => {
    
    const [todos,setTodos] = useState([]);

    // 상태관리(CRUD) -> 의존성 배열 추가
    const [isTodoUpdate,setIsTodoUpdate] = useState(false);

    // 데이터를 가져옴
    const getTodos = async() => {
        try{
            const response = await fetch("http://localhost:8000/todo");
            if (!response.ok) {
                throw new Error("네트워크 응답이 실패했습니다.");
            }
            const datas = await response.json();
            setTodos(datas);
        }
        catch(error){
            console.error("API 호출 오류:", error);
        }
    }

    // 사이드 이펙트
    // isTodoUpdate의 값이 바뀔때마다 getTodos를 실행
    useEffect(()=>{
        getTodos()
    },[isTodoUpdate])

    return (
        <div>
            <TodoInsert isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} todos={todos} />
            <S.SubTitle>남은 할일:<span>{todos && todos.length}</span></S.SubTitle>
            <ul>
                {todos && todos.map((todo,i)=>(
                    <Todo key={i} todo={todo} isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} />
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;