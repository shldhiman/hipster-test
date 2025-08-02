import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import reactLogo from '../../assets/react.svg'
import { ThemeSwitcher } from '../theme/themeSwitcher';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const Layout = () => {

    return (

        <div className="bg-background">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 md:px-8 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={reactLogo} alt="Logo" className="h-8 w-8" />
                    {/* <span className="text-xl font-bold text-primary tracking-tight">MyApp</span> */}
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:block md:flex gap-6 font-medium">
                    <Link to={"/"} className="">Home</Link>
                    <Link to={"/about"} className="">About</Link>
                    <Link to={"/contact"} className="">Contact Us</Link>
                </nav>

                {/* Theme Switcher */}
                <div className="ml-4">
                    <ThemeSwitcher />
                </div>
                <div className="md:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DrawerTrigger>

                        <DrawerContent className="p-6">
                            <nav className="flex flex-col gap-4 text-lg">
                                <Link to="/">
                                    <DrawerClose asChild>
                                        <span className="cursor-pointer">Home</span>
                                    </DrawerClose>
                                </Link>
                                <Link to="/about" >
                                    <DrawerClose asChild>
                                        <span className="cursor-pointer">About</span>
                                    </DrawerClose>
                                </Link>
                                <Link to="/contact" >
                                    <DrawerClose asChild>
                                        <span className="cursor-pointer">Contact</span>
                                    </DrawerClose>
                                </Link>
                            </nav>
                        </DrawerContent>
                    </Drawer>
                </div>
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
