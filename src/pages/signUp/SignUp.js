import React from 'react';
import { useForm } from 'react-hook-form';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';
import S from './style';
import Input from '../../components/input/style';


const SignUp = () => {
    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});
    
    // 정규식(아이디,패스워드)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // 페이지를 넘겨줄 수 있는 훅폼
    const navigate = useNavigate();



    return (
        <S.Form onSubmit={handleSubmit(async(data)=>{
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
            <S.Label>
                <S.Title>이메일</S.Title>
                <Input size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" id="email" name="email" placeholder="아이디를 입력하세요."

                {...register("email",{
                    required: true,
                    pattern:{
                        value: emailRegex,
                    }
                })}
                />
                {errors?.email?.type === 'required' && (
                    <S.ConfirmMessage>이메일을 입력해주세요.</S.ConfirmMessage>
                )}
                {errors?.email?.type === 'pattern' && (
                    <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요.</S.ConfirmMessage>
                )}
            </S.Label>
            {/* 비밀번호 */}
            <S.Label>
                <S.Title>비밀번호</S.Title>
                <Input size={"full"} shape={"small"} variant={"blue"} color={"black"} type="password" id="password" name="password" placeholder="비밀번호를 입력하세요."
                
                {...register("password",{
                    required: true,
                    pattern:{
                        value: passwordRegex,
                    }
                })}
                />
                {errors?.password?.type === "required" && (
                    <S.ConfirmMessage>비밀번호를 입력해주세요.</S.ConfirmMessage>)
                }
                {errors?.password?.type === "pattern" && (
                    <S.ConfirmMessage>소문자, 숫자, 특수문자 각 하나씩 포함한 8자리 이상이여야 합니다. *!@#만 사용가능</S.ConfirmMessage>)
                }
            </S.Label>
            {/* 비밀번호 확인 */}
            <S.Label>
                <S.Title>비밀번호 확인</S.Title>
                <Input size={"full"} shape={"small"} variant={"blue"} color={"black"} type="password" placeholder="비밀번호를 확인해주세요."
                {...register("passwordConfirm", {
                    required : true,
                    validate : {
                      matchPassword : (value) => {
                        const { password } = getValues();
                        let isMatch = password == value;
                        console.log(value, password, isMatch);
                        return isMatch;
                      }
                    }
                  })}
                />
                {errors?.passwordConfirm && (
          <S.ConfirmMessage>비밀번호를 확인해 주세요.</S.ConfirmMessage>
        )}
            </S.Label>
            <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton> 
        </S.Form>
    );
};

export default SignUp;