import React from 'react';
import { useForm } from 'react-hook-form';
import BasicButton from '../../components/button/BasicButton';
import { Navigate, useNavigate } from 'react-router-dom';
import S from './style';
import Input from '../../components/input/style';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';


const SignIn = () => {
    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});
    
    // 정규식(아이디,패스워드)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // 로그인 이후 로직
    const dispatch = useDispatch();
    const isLogin = useSelector((state)=> state.user.isLogin); //현재 로그인 상태
    const currentUser = useSelector((state=>state.user.currentUser)); //현재 로그인된 id

    // 리다이렉트
    if(isLogin){
        return(
            <>
                {/* <div>{currentUser.email}님 환영합니다.</div> */}
                <Navigate to={"/my"} replace={true}/>
            </>
        )
    }


    return (
        <S.Form onSubmit={handleSubmit(async (data)=>{
            console.log(data)
            await fetch("http://localhost:8000/user/login",{
                method: "POST",
                headers: {
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })
            .then((res)=>res.json())
            .then((res)=>{
                if(!res.loginSuccess){
                    let {loginSuccess, message} = res;
                    alert(message);
                }else{
                    let {user,loginSuccess, message} = res;
                    console.log("로그인 성공!😀",user)
                    dispatch(setUser(user))
                    dispatch(setUserStatus(true))
                }
            })
            .catch(console.error)
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
            
            
            <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton> 
        </S.Form>
    );
};

export default SignIn;