import React from 'react';
import Section from "../Section";
import Table from "../Table";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../redux/auth/selectors";
import {isUser} from "../../utils";

const UserInformationTab = () => {
    const user = useSelector(selectAuthUser);

    return (
        <div className={`tab-pane fade ${isUser(user) ? "active show" : ""}`} id="v-pills-user_details" role="tabpanel"
             aria-labelledby="v-pills-user_details-tab">
            <h1>User information-page</h1>
            <Section title="About user">
                <Table data={user ? [user] : []} hasActions={false} />
            </Section>
        </div>
    );
};

export default UserInformationTab;
