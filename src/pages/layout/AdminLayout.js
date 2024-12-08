import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style';

// 로그인 되었을 때의 layout
const AdminLayout = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Heayoon Todo</Link>
                </S.Header>
                
                <S.main>
                    <Outlet />
                </S.main>

                <S.Nav>
                    <NavLink to={"/todo"}>
                        <p>피드</p>
                    </NavLink>
                    <NavLink to={"/search"}>
                        <p>검색</p>
                    </NavLink>
                    <NavLink to={"/notice"}>
                        <p>알림</p>
                    </NavLink>
                    <NavLink to={"/my"}>
                        <p>My</p>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default AdminLayout;