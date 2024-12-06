import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='wrapper'>
            <div className='imgWrapper'>
                <img />
            </div>
            <div className='buttonWrapper'>
                <Link to={"/signIn"}>
                    <button>로그인</button>
                </Link>

                <Link to={"/signUp"}>
                    <button>회원가입</button>
                </Link>
            </div>
        </div>
    );
};

export default Main;