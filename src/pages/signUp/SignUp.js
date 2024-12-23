import React from 'react';
import { Form, useFormAction } from 'react-router-dom';
import BasicInput from '../../components/input/BasicInput';
import BasicButton from '../../components/button/BasicButton';

useFormAction();

const SignUp = () => {
    return (
        <form action="">
            {/* 이메일 */}
            <label>
                <p>이메일</p>
                <BasicInput size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" id="email" name="email" placeholder="아이디를 입력하세요."/>
            </label>
            {/* 비밀번호 */}
            <label>
                <p>비밀번호</p>
                <BasicInput size={"full"} shape={"small"} variant={"blue"} color={"black"} type="text" id="password" name="password" placeholder="비밀번호를 입력하세요."/>
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