import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style';

const Layout = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Hyeyoon Todo</Link>
                </S.Header>
                
                <main>
                    <Outlet />
                </main>

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

export default Layout;