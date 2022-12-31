import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout";
import {UserDetails} from "./types";
import {SERVER_API} from "./utils";

const App = () => {
    const [authenticatedUser, setAuthenticatedUser] = React.useState<UserDetails | null>(null);

    React.useEffect(() => {
        fetch(`${SERVER_API}/admin/3`)
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((data) => setAuthenticatedUser(data))
            .catch((err) => console.log("Something went wrong: " + JSON.stringify(err)));
    }, []);

    if (authenticatedUser == null) return <div>loading...</div>;

    return (
        <div>
            <Header authUser={authenticatedUser}/>
            <Layout />
        </div>
    );
};

export default App;
