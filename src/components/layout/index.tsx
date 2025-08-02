import React from 'react';
import { Outlet } from 'react-router-dom';
import reactLogo from '../../assets/react.svg'
import { ThemeSwitcher } from '../theme/themeSwitcher';

const Layout = () => {

    return (

        <div className="">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 md:px-8 py-3 flex items-center justify-between">
                {/* App Logo/Name */}
                <div className="text-xl font-bold text-primary tracking-tight">
                    <img src={reactLogo} />
                </div>

                {/* Theme Switcher */}
                <ThemeSwitcher />
            </header>

            {/* Main content */}
            <div className='p-4'></div>
            <main className="p-4 pt-8"  >
                <Outlet />
            </main>
        </div>


    );
};

export default Layout;
