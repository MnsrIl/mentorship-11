import React from 'react';
import {UserDetails} from "../types";
import {getPlainAuthorityInfo} from "../utils";

const Header = ({authUser}: { authUser: UserDetails }) => {
    return (
        <header className="bg-dark p-3 text-white d-flex justify-content-between">
            <div>
                <b>{authUser.email}</b> with roles: {getPlainAuthorityInfo(...authUser.authorities)}
            </div>
            <button className="bg-transparent text-secondary border-0">
                Logout
            </button>
        </header>
    );
};

export default Header;
