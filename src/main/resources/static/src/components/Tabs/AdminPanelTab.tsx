import React from 'react';
import Section from "../Section";
import Table from "../Table";
import {UserDetails} from "../../types";
// import {useDispatch} from "react-redux";
// import {getUsers} from "../../store/users/thunks";

const AdminPanelTab = ({ data }: { data: UserDetails[] }) => {
    return (
        <div className="tab-pane fade show active" id="all-users" role="tabpanel"
             aria-labelledby="all-users-tab">
            <Section title="Admin panel">
                <Table data={data} hasActions />
            </Section>
        </div>
    );
};

export default AdminPanelTab;
