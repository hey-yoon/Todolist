import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='background'>
            <div className='wrapper'>
                <header>
                    <Link to={"/"}>Hyeyoon Todo</Link>
                </header>
                
                <main>
                    <Outlet />
                </main>

                <nav>
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
                </nav>
            </div>
        </div>
    );
};

export default Layout;