import {UserDetails} from "../../types";

export interface userState {
    items:UserDetails[]
    loading:boolean;
    error:boolean
}