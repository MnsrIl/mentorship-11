import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout";
import {useAppDispatch} from "./redux/store";
import {fetchLoggedInUser} from "./redux/auth/thunks";
import {useSelector} from "react-redux";
import {selectAuthError, selectAuthLoading, selectLogIn} from "./redux/auth/selectors";

const App = () => {
    const dispatch = useAppDispatch();
    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);
    const isLoggedIn = useSelector(selectLogIn);

    React.useEffect(() => {
        dispatch(fetchLoggedInUser());
    }, []);

    if (loading) return <div>loading...</div>;

    if (error) return <div>Something went wrong..</div>

    if (!isLoggedIn) return <div>User not authorized</div>

    return (
        <div>
            <Header />
            <Layout />
        </div>
    );
};

export default App;
