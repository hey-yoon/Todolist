import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigation = useNavigate();

    return (
        <div>
            <h1>원하시는 페이지를 찾을 수 없습니다.</h1>
            {navigation('/main')}

        </div>
    );
};

export default PageNotFound;