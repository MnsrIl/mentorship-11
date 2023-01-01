import React from 'react';
import {useSelector} from "react-redux";
import {getPlainAuthorityInfo} from "../utils";
import {selectAuthUser} from "../redux/auth/selectors";
import {useAppDispatch} from "../redux/store";
import {logoutAuthUser} from "../redux/auth/slice";

const Header = () => {
    const authenticatedUser = useSelector(selectAuthUser);
    const dispatch = useAppDispatch();

    if (authenticatedUser === null) return null;

    const handleLogout = () => {
        dispatch(logoutAuthUser());
    }

    return (
        <header className="bg-dark p-3 text-white d-flex justify-content-between">
            <div>
                <b>{authenticatedUser.email}</b> with roles: {getPlainAuthorityInfo(...authenticatedUser.authorities)}
            </div>
            <button onClick={handleLogout} className="bg-transparent text-secondary border-0">
                Logout
            </button>
        </header>
    );
};

export default Header;
