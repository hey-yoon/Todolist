import React from 'react';
import { faBell, faCreditCard, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
import {useDispatch, useSelector} from 'react-redux';

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
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                        <p>피드</p>
                    </NavLink>
                    <NavLink to={"/search"}>
                        <FontAwesomeIcon icon={faSearch} className='icon' />
                        <p>검색</p>
                    </NavLink>
                    <NavLink to={"/notice"}>
                        <FontAwesomeIcon icon={faBell} className='icon' />
                        <p>알림</p>
                    </NavLink>
                    <NavLink to={"/my"}>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <p>My</p>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default AdminLayout;