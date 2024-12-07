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
                    <NavLink to={"/"}>
                        <p>피드</p>
                    </NavLink>
                    <NavLink to={"/"}>
                        <p>검색</p>
                    </NavLink>
                    <NavLink to={"/"}>
                        <p>알림</p>
                    </NavLink>
                    <NavLink to={"/"}>
                        <p>my</p>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default Layout;