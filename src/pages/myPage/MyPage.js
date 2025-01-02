import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { setUser, setUserStatus } from '../../modules/user';

const MyPage = () => {

    // const [searchParams] = useSearchParams();
    // const login = searchParams.get("login");
    
    // 리덕스 가져오기
    const previousUrl = useSelector((state)=>state.user.previousUrl); //이전 url
    const currentUser = useSelector((state)=>state.user.currentUser); //유저정보
    const isLogin = useSelector((state)=>state.user.isLogin); //로그인 상태
    const dispatch = useDispatch();

    // 로그아웃
    const logout = () => {
        dispatch(setUser({})) //빈객체 반납
        dispatch(setUserStatus(false)) //로그인 상태 false
    }

    const {email, name,phone,age} = currentUser;
    console.log("user",currentUser)

    if(isLogin){
        return (
            <>
                <div>
                    <p>{email}님 환영합니다.</p>
                    <p>나이:{age}</p>
                    <p>이름:{name}</p>
                </div>
                <button onClick={logout}>로그아웃</button>
            </>
        )
    }

    // Navigate to={보낼 경로} replace={} 왔던 기록을 없애게 만든다. history에서 사라진다.
    return <Navigate to={previousUrl} replace={true} />
};

export default MyPage;