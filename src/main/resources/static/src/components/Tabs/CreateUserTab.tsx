import React, {FormEvent} from 'react';
import Section from "../Section";
import {authorities} from "../../utils";
import {useAppDispatch} from "../../redux/store";
import {addUser} from "../../redux/user/thunks";

const formFields = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
    roles: [
        "1"
    ] as string[]
};

const CreateUserTab = () => {
    const [fields, setFields] = React.useState(formFields);
    const dispatch = useAppDispatch();

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFields({...fields, [name]: value});
    };

    const handleSelectRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const options = event.target.selectedOptions;
        const selectedIDs: string[] = [];

        for (let index = 0; index < options.length; index++) {
            const item = options.item(index);

            if (item) selectedIDs.push(item.value);
        }

        setFields({...fields, roles: selectedIDs})
    }

    const handleSubmitForm = async (event: FormEvent) => {
        event.preventDefault();

        const validAuthorities = fields.roles ? fields.roles.map(roleId => authorities.find(authority => authority.id === Number(roleId))).filter(Boolean) : []

        // const response = await fetch("http://localhost:8080/api/admin/create", {
        //     method: "POST",
        //     body: JSON.stringify({...fields, roles: validAuthorities}),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        const {payload} = await dispatch(addUser({...fields, roles: validAuthorities}))

        if (payload.status === 201) {
            console.log("User was created")

            setFields(formFields);
        } else {
            console.log("Error while creating user", payload.json());
        }
    }

    return (
        <div className="tab-pane fade" id="create-user" role="tabpanel"
             aria-labelledby="create-user-tab">
            <Section title="Add new user">
                <div className="container col-5">
                    <form id="createForm"
                          onSubmit={handleSubmitForm}
                          className="g-3 needs-validation container text-center fw-bold"
                          noValidate>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreateFirstName">First name</label>
                                <input type="text"
                                       className="form-control"
                                       name="firstName"
                                       id="validationCreateFirstName"
                                       value={fields.firstName}
                                       onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreateLastName">Last name</label>
                                <input type="text"
                                       className="form-control"
                                       name="lastName"
                                       id="validationCreateLastName"
                                       onChange={handleChangeInput}
                                       value={fields.lastName}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreateAge">Age</label>
                                <input type="number"
                                       className="form-control"
                                       name="age"
                                       id="validationCreateAge"
                                       onChange={handleChangeInput}
                                       value={fields.age}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreateEmail">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCreateEmail"
                                    value={fields.email}
                                    name="email"
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreatePassword">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="validationCreatePassword"
                                    name="password"
                                    value={fields.password}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 gy-3">
                                <label htmlFor="validationCreateRole">Role</label>
                                <select
                                    multiple
                                    size={2}
                                    className="form-select"
                                    id="validationCreateRole"
                                    value={fields.roles}
                                    onChange={handleSelectRole}
                                    required
                                >
                                    {authorities.map(role => <option key={role.id}
                                                                     value={role.id}>{role.authority}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col-auto mt-3">
                            <button type="submit" className="btn btn-success">
                                Add new user
                            </button>
                        </div>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default CreateUserTab;
