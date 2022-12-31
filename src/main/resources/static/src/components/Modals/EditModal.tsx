import React, {FormEvent} from 'react';
import {authorities} from "../../utils";
import {Role, UserDetails} from "../../types";
import {useAppDispatch} from "../../redux/store";
import {updateUser} from "../../redux/user/thunks";

interface EditModalProps {
    data: UserDetails | null;
}

const defaultFormFields: UserDetails = {
    authorities: [],
    id: -1,
    password: "",
    age: 0,
    email: "",
    firstName: "",
    lastName: ""
}

const EditModal = ({data }: EditModalProps) => {
    const [fields, setFields] = React.useState(data || defaultFormFields);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        setFields(data || defaultFormFields);
    }, [data]);

    if (!data) return null;

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFields({...fields, [name]: value});
    };

    const handleSelectRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const options = event.target.selectedOptions;
        const selectedIDs: Role[] = [];

        for (let index = 0; index < options.length; index++) {
            const item = options.item(index);

            if (!item) continue;

            const associatedRole = authorities.find(role => role.id === Number(item.value));

            if (associatedRole)
                selectedIDs.push(associatedRole);
        }
        setFields({...fields, authorities: selectedIDs})
    }

    const handleSubmitForm = async (event: FormEvent) => {
        event.preventDefault();


        const params: any = {
            ...fields,
            roles: authorities,
            authorities: undefined
        }

        delete params.authorities;
        //
        // const response = await fetch("http://localhost:8080/api/admin/edit", {
        //     method: "PUT",
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        const { payload } = await dispatch(updateUser(params));

        if (payload.ok) {
            console.log("User was updated")
            const updatedUser = await payload.json();

        } else {
            console.log("Error while updating user", payload.json());
            setFields(data);
        }
    }

    return (
        <div className="modal fade" id="editModalCenter" tabIndex={-1} role="dialog"
             aria-labelledby="editModalCenterTitle"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLongTitle">Edit user</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <form id="editForm" onSubmit={handleSubmitForm}
                              className="g-3 needs-validation container text-center fw-bold" noValidate>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <label htmlFor="editId">ID</label>
                                    <input disabled type="text" className="form-control" id="editId" value="1"/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditFirstName">First name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="firstName"
                                           id="validationEditFirstName"
                                           value={fields.firstName}
                                           onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditLastName">Last name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="lastName"
                                           id="validationEditLastName"
                                           onChange={handleChangeInput}
                                           value={fields.lastName}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditAge">Age</label>
                                    <input type="number"
                                           className="form-control"
                                           name="age"
                                           id="validationEditAge"
                                           onChange={handleChangeInput}
                                           value={fields.age}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditEmail">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationEditEmail"
                                        value={fields.email}
                                        name="email"
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditPassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationEditPassword"
                                        name="password"
                                        value={fields.password}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 gy-3">
                                    <label htmlFor="validationEditRole">Role</label>
                                    <select
                                        multiple
                                        size={2}
                                        className="form-select"
                                        id="validationEditRole"
                                        value={fields.authorities.map(role => String(role.id))}
                                        onChange={handleSelectRole}
                                        required
                                    >
                                        {authorities.map(role => <option key={role.id}
                                                                         value={role.id}>{role.authority}</option>)}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                aria-label="Close">
                            Close
                        </button>
                        <button type="submit" form="editForm" className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
