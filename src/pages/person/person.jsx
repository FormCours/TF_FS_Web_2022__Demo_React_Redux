import { Outlet } from "react-router-dom";

const PersonPage = () => {

    return (
        <>
            <h1>Person Page!</h1>
            <Outlet />
        </>
    )
}

export default PersonPage;