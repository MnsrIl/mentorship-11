import {Role, UserDetails} from "./types";

export const SERVER_API = "http://localhost:8080/api";

export const authorities: Role[] = [
    {
        id: 1,
        authority: "ROLE_USER"
    },
    {
        id: 2,
        authority: "ROLE_ADMIN"
    }
];

export const getPlainAuthorityInfo = (...roles: Role[]): string => {
    const rawRoles = [];
    const BLANK = "ROLE_";

    for (const role of roles) {
        rawRoles.push(role.authority.substring(BLANK.length, role.authority.length));
    }

    return rawRoles.sort().join(" ");
}

export const isUser = (user: UserDetails | null): boolean => {
    if (!user) return false;

    if (user.authorities.length > 1) return false;

    return user.authorities[0].authority === "ROLE_USER";
}

export const isAdmin = (user: UserDetails | null): boolean => {
    if (!user) return false;

    for (let i = 0; i < user.authorities.length; i++) {
        if (user.authorities[i].authority === "ROLE_ADMIN") {
            return true;
        }
    }

    return false;
}