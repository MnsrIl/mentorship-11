import React from 'react';
import { UserDetails } from "../../types";
import {authorities, getPlainAuthorityInfo} from "../../utils";
import {useAppDispatch} from "../../redux/store";
import {removeUser} from "../../redux/user/thunks";

interface DeleteModalProps {
    data: UserDetails | null;
}

const DeleteModal = ({ data }: DeleteModalProps) => {
    const dispatch = useAppDispatch();
    if (data === null) return null;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const {payload} = await dispatch(removeUser(data.id))
        // const response = await fetch("http://localhost:8080/api/admin/delete/" + data.id, {
        //     method: "DELETE"
        // });

        if (payload.ok) {
            const data = await payload.text();
            console.log(data);
        }
    }

    return (
        <div className="modal fade" id="deleteModalCenter" tabIndex={-1} role="dialog"
             aria-labelledby="deleteModalCenterTitle"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLongTitle">Delete user</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} id="deleteForm" className="g-3 container text-center fw-bold" noValidate>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <label htmlFor="deleteFormId">ID</label>
                                    <input disabled type="text" className="form-control" id="deleteFormId" value={data.id} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="deleteFormFirstName">First name</label>
                                    <input type="text" className="form-control" id="deleteFormFirstName" disabled
                                           value={data.firstName} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="deleteFormLastName">Last name</label>
                                    <input type="text" className="form-control" id="deleteFormLastName" disabled
                                           value={data.lastName} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditAge">Age</label>
                                    <input type="number" className="form-control" id="deleteFormAge" disabled
                                           value={data.age}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="deleteFormEmail">Email</label>
                                    <input type="text" className="form-control" id="deleteFormEmail" disabled
                                           value={data.email} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="deleteUserPassword">Password</label>
                                    <input type="password" className="form-control" id="deleteUserPassword" disabled
                                           value={data.password}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="deleteFormRole">Role</label>
                                    <select value={data.authorities.map(role => String(role.id))} multiple size={2} className="form-select" id="deleteFormRole" disabled>
                                        {authorities.map(role => <option key={role.id}
                                                                         value={role.id}>{getPlainAuthorityInfo(role)}</option>)}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" form="deleteForm" data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
