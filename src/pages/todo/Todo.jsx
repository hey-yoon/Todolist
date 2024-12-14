import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons' ;

const Todo = ({isTodoUpdate,setIsTodoUpdate,todo}) => {
    const {id,title} = todo;
    // edit 상태 관리
    const [isEdit, setIsEdit] = useState(false);
    // useInput 훅폼을 가져와서 기본값으로 title 넣기
    const [value, onChangeValue, setValue] = useInput(title);

    // edit를 핸들링하는 함수
    const handleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    // check 상태 관리
    const [isChecked,setIsChecked] = useState(todo.isChecked);

    // check를 핸들링하는 함수: check를 onclick하면, fetch(PUT)로 날라감, 그리고 서버에서 받으면, TodoContainer에서 선언한 상태관리가 바껴서, 다시 데이터를 리랜더링함
    // const handleIsChecked = async()=> {
    //     await fetch(`http://localhost:4000/todo/check`,{
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             ...todo,
    //             isChecked: !isChecked
    //         })
    //     }).then((res)=>{
    //         console.log('리스폰스',res)
    //         if(!res.ok) return console.error(`Error ${res}`)
    //         setIsTodoUpdate(!isTodoUpdate)
    //         setIsChecked(!isChecked)
    //     })
    // }
    
    // 체크관리 함수
    const handleIsChecked = async () => {
        try {
            //  보내는 로직(데이터)
            const response = await fetch("http://localhost:8000/todo/check", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                // json형태로 변경
                body: JSON.stringify({
                    ...todo,
                    id: todo.id, // ID를 명시적으로 전달
                    isChecked: todo.isChecked, // 현재 상태 전달
                }),
            });
            // 만약 응답이 없다면
            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }
            // 만약 응답이 있다면,
            // 자바스크립트 객체로 변경해서 데이터 받아옴
            const result = await response.json();
            console.log("성공적인 응답:", result);
    
            // 업데이트 로직 실행
            setIsTodoUpdate(!isTodoUpdate);
            setIsChecked(!todo.isChecked);
        } catch (error) {
            console.error("API 호출 오류:", error);
        }
    };

    // 삭제
    const handleIsRemove = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            await fetch(`http://localhost:4000/todo/delete`,{
                method: 'DELETE'
            }).then((res)=>{
                console.log("리스폰스 받기",res)
                if(res.ok){
                    setIsTodoUpdate(!isTodoUpdate)
                }
            })
        }
    }

    // 타이틀 수정
    const handleIsUpdate = async() => {
        await fetch(`http://localhost:4000/todo/modify`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                title: value
            })
        }).then((res)=> {
            console.log("리스폰스",res)
            if(!res.ok) return console.error(`Error ${res}`)
            setIsTodoUpdate(!isTodoUpdate)
            setIsEdit(!isEdit)
        })
    }

    
    return (
        <li>
            <div className='wrapper'>
                <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
                {isEdit ? (
                    <input className='update-input' type='text' value={value} onChange={onChangeValue}/>
                ) : (
                    <p className={isChecked? "complete" : ""}>{title}</p>
                )}

            </div>
            <div className='wrapper'>
                {isEdit ? (
                    <>
                        <button onClick={handleIsUpdate}>
                            <FontAwesomeIcon className='check' icon={faCheck}></FontAwesomeIcon>
                        </button>
                        <button onClick={handleIsEdit}>
                            <FontAwesomeIcon className='exit' icon={faX} ></FontAwesomeIcon>
                        </button>
                    </>
                ) : (
                    <button onClick={handleIsEdit}>
                        <FontAwesomeIcon className='pen' icon={faPen}></FontAwesomeIcon>
                    </button>
                )}
                <button onClick={handleIsRemove}>
                    <FontAwesomeIcon className='trash' icon={faTrash}></FontAwesomeIcon>
                </button>
                
            </div>
        </li>
    );
};

export default Todo;