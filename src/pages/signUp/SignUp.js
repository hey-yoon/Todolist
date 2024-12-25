import React from 'react';
import { useForm } from 'react-hook-form';
import BasicInput from '../../components/input/BasicInput';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});
    
    // 정규식(아이디,패스워드)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // 페이지를 넘겨줄 수 있는 훅폼
    const navigate = useNavigate();



    return (
        <form onSubmit={handleSubmit(async(data)=>{
            await fetch("http://localhost:8000/user/register",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })

        })}>
            {/* 이메일 */}
            <label>
                <p>이메일</p>
                <BasicInput size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" id="email" name="email" placeholder="아이디를 입력하세요."

                {...register("email",{
                    required: true,
                    pattern:{
                        value: emailRegex,
                    }
                })}
                />
                {errors?.email?.type === "required" && (
                    <p>이메일을 입력해주세요.</p>
                )}
                {errors?.email?.type === "pattern" && (
                    <p>이메일 양식에 맞게 입력해주세요.</p>
                )}
            </label>
            {/* 비밀번호 */}
            <label>
                <p>비밀번호</p>
                <BasicInput size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" id="password" name="password" placeholder="비밀번호를 입력하세요."
                
                {...register("password",{
                    required: true,
                    pattern:{
                        value: passwordRegex,
                    }
                })}
                />
                {errors?.password?.type === "required" && (
                    <p>비밀번호를 입력해주세요.</p>)
                }
                {errors?.password?.type === "pattern" && (
                    <p>소문자, 숫자, 특수문자 각 하나씩 포함한 8자리 이상이여야 합니다. *!@#만 사용가능</p>)
                }
            </label>
            {/* 비밀번호 확인 */}
            <label>
                <p>비밀번호 확인</p>
                <BasicInput size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" placeholder="비밀번호를 입력하세요."/>
            </label>
            <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton> 
        </form>
    );
};

export default SignUp;