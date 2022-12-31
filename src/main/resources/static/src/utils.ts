import {Role} from "./types";

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
]

export const getPlainAuthorityInfo = (...roles: Role[]): string => {
    const rawRoles = [];
    const BLANK = "ROLE_";

    for (const role of roles) {
        rawRoles.push(role.authority.substring(BLANK.length, role.authority.length));
    }

    return rawRoles.sort().join(" ");
}
