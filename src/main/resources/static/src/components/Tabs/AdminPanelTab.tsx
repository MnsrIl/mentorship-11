import React from 'react';
import Section from "../Section";
import Table from "../Table";
import {useSelector} from "react-redux";
import {selectUsers} from "../../redux/user/selectors";

const AdminPanelTab = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="tab-pane fade show active" id="all-users" role="tabpanel"
             aria-labelledby="all-users-tab">
            <Section title="Admin panel">
                <Table data={users} hasActions />
            </Section>
        </div>
    );
};

export default AdminPanelTab;
