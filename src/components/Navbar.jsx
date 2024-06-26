import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { setUser, clearUser } from '../redux/userSlice';
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const itemCount = cartItems.length;
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        // Restore user from localStorage if exists
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            dispatch(setUser(JSON.parse(storedUser)));
        }
    }, [dispatch]);

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleLogout = () => {
        googleLogout();
        dispatch(clearUser());
        localStorage.removeItem('user'); // Clear user from localStorage on logout
    };

    return (
        <div className="bg-purple-400 shadow-lg" >
            <div className=" mx-auto flex justify-between items-center py-4 px-4">
                <div className="flex items-center space-x-4">
                    <label className="cursor-pointer grid place-items-center">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={handleThemeChange}
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    <Link to="/" className="btn text-red-800 btn-ghost normal-case text-xl dark:text-white">
                        Script Shop
                    </Link>
                </div>
                <div className="flex-none flex items-center space-x-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">{itemCount}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <Link to="/cart" className="card-body">
                                <span className="font-bold text-lg">{itemCount} товаров</span>
                                <span className="text-info">Всего: {totalPrice}₽</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">Показать корзину</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user ? (
                                    <img alt="User avatar" src={user.picture} />
                                ) : (
                                    <img
                                        alt="Default avatar"
                                        src="https://imgur.com/2BvFV5x.jpg"
                                    />
                                )}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {user ? (
                                <>
                                    <li>
                                        <button onClick={handleLogout} className="btn btn-danger">
                                            Выйти
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <GoogleLogin
                                        onSuccess={(credentialResponse) => {
                                            const profile = jwtDecode(credentialResponse.credential);
                                            dispatch(setUser(profile));
                                            localStorage.setItem('user', JSON.stringify(profile)); // Save user to localStorage
                                        }}
                                        onError={() => {
                                            console.log("Login Failed");
                                        }}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
