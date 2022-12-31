import React from 'react';
import Section from "../Section";
import Table from "../Table";

const UserInformationTab = () => {
    return (
        <div className="tab-pane fade" id="v-pills-user_details" role="tabpanel"
             aria-labelledby="v-pills-user_details-tab">
            <h1>User information-page</h1>
            <Section title="About user">
                <Table data={[{
                    id: 1,
                    age: 18,
                    email: "admin@admin.ru",
                    lastName: "admin",
                    firstName: "admin",
                    authorities: [],
                    password: ""
                }]} hasActions={false}/>
            </Section>
        </div>
    );
};

export default UserInformationTab;
