import React from 'react';
import UserInformationTab from "./Tabs/UserInformationTab";
import CreateUserTab from "./Tabs/CreateUserTab";
import AdminPanelTab from "./Tabs/AdminPanelTab";
import {useAppDispatch} from "../redux/store";
import {fetchUsers} from "../redux/user/thunks";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../redux/auth/selectors";
import {isAdmin} from "../utils";


const Layout = () => {
    const dispatch = useAppDispatch();
    const authUser = useSelector(selectAuthUser);

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    if (authUser === null) return null;

    return (
        <>
            <main style={{height: "calc(100vh - 58px)"}} className="d-flex">
                <div className="w-100 d-flex align-items-start">
                    <div style={{width: "15%"}} className="nav h-100 pt-4 bg-white flex-column nav-pills"
                         id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        {isAdmin(authUser) &&
                            <button className="nav-link text-start active" id="v-pills-admin-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-admin"
                                    type="button" role="tab" aria-controls="v-pills-admin" aria-selected="true">
                                Admin
                            </button>
                        }
                        <button className={`nav-link text-start ${isAdmin(authUser) ? "" : "active"}`}
                                id="v-pills-user_details-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-user_details"
                                type="button" role="tab" aria-controls="v-pills-user_details" aria-selected="false">
                            User
                        </button>
                    </div>
                    <div style={{flex: 1}} className="tab-content p-4" id="v-pills-tabContent">
                        {isAdmin(authUser) &&
                            <div className="tab-pane fade show active" id="v-pills-admin" role="tabpanel"
                                 aria-labelledby="v-pills-admin-tab">
                                <h1>Admin panel</h1>
                                <nav>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="all-users-tab" data-bs-toggle="tab"
                                                    data-bs-target="#all-users" type="button" role="tab"
                                                    aria-controls="all-users"
                                                    aria-selected="true">Users Table
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="create-user-tab" data-bs-toggle="tab"
                                                    data-bs-target="#create-user" type="button" role="tab"
                                                    aria-controls="create-user"
                                                    aria-selected="false">
                                                New User
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="tab-content" id="myTabContent">
                                    <AdminPanelTab/>
                                    <CreateUserTab/>
                                </div>
                            </div>
                        }
                        <UserInformationTab />
                    </div>
                </div>
            </main>
        </>
    );
};

/*<div className="modal fade" id="editModalCenter" tabindex="-1" role="dialog" aria-labelledby="editModalCenterTitle"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLongTitle">Edit user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="editForm" className="g-3 needs-validation container text-center fw-bold" novalidate>
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <label htmlFor="editId">ID</label>
                                        <input disabled type="text" className="form-control" id="editId" value="1">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditFirstName">First name</label>
                                        <input type="text" className="form-control" id="validationEditFirstName" value="Mark">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditLastName">Last name</label>
                                        <input type="text" className="form-control" id="validationEditLastName" value="Mark">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditAge">Age</label>
                                        <input type="number" className="form-control" id="validationEditAge" required>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditEmail">Email</label>
                                        <input type="text" className="form-control" id="validationEditEmail" value="111@mail.ru">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditPassword">Password</label>
                                        <input type="text" className="form-control" id="validationEditPassword">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditRole">Role</label>
                                        <select multiple size="2" className="form-select" id="validationEditRole" required>
                                            <option selected>User</option>
                                            <option>Admin</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a role.
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close
                            </button>
                            <button type="button" form="editForm" className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Delete Modal -->
            <div className="modal fade" id="deleteModalCenter" tabindex="-1" role="dialog" aria-labelledby="deleteModalCenterTitle"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLongTitle">Delete user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="deleteForm" className="g-3 container text-center fw-bold" novalidate>
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <label htmlFor="deleteFormId">ID</label>
                                        <input disabled type="text" className="form-control" id="deleteFormId" value="1">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="deleteFormFirstName">First name</label>
                                        <input type="text" className="form-control" id="deleteFormFirstName" disabled value="Mark">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="deleteFormLastName">Last name</label>
                                        <input type="text" className="form-control" id="deleteFormLastName" disabled value="Mark">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="validationEditAge">Age</label>
                                        <input type="number" className="form-control" id="deleteFormAge" disabled>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="deleteFormEmail">Email</label>
                                        <input type="text" className="form-control" id="deleteFormEmail" disabled value="111@mail.ru">
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="deleteUserPassword">Password</label>
                                        <input type="password" className="form-control" id="deleteUserPassword" disabled>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 gy-3">
                                        <label htmlFor="deleteFormRole">Role</label>
                                        <select multiple size="2" className="form-select" id="deleteFormRole" disabled>
                                            <option>User</option>
                                            <option>Admin</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
* */

export default Layout;
