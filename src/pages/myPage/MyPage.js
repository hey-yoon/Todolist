import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';

const MyPage = () => {

    // const [searchParams] = useSearchParams();
    // const login = searchParams.get("login");
    
    const previousUrl = useSelector((state)=>state.user.previousUrl);
    const currentUser = useSelector((state)=>state.user.currentUser);
    const isLogin = useSelector((state)=>state.user.isLogin);

    const {email, name,phone,age} = currentUser;
    console.log("user",currentUser)

    if(isLogin){
        return (
            <div>
                <p>{email}님 환영합니다.</p>
                <p>나이:{age}</p>
                <p>이름:{name}</p>
            </div>
        )
    }

    // Navigate to={보낼 경로} replace={} 왔던 기록을 없애게 만든다. history에서 사라진다.
    return <Navigate to={previousUrl} replace={true} />
};

export default MyPage;