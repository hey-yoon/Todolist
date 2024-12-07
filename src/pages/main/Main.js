import React from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';

const Main = () => {
    return (
        <div className='wrapper'>
            <div className='imgWrapper'>
                <img />
            </div>
            <div className='buttonWrapper'>
                <Link to={"/signIn"}>
                    <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
                </Link>

                <Link to={"/signUp"}>
                    <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
                </Link>
            </div>
        </div>
    );
};

export default Main;