import {UserDetails} from "../../types";

export interface AuthState {
    authUser: UserDetails | null;
    authenticated: boolean;
    loading: boolean;
    error: boolean
}