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
    const handleIsChecked = async()=> {
        await fetch(`http://localhost:4000/todo/check`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                isChecked: !isChecked
            })
        }).then((res)=>{
            console.log('리스폰스',res)
            if(!res.ok) return console.error(`Error ${res}`)
            setIsTodoUpdate(!isTodoUpdate)
            setIsChecked(!isChecked)
        })
    }

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