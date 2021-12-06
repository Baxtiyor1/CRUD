import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

import useToken from "../Hook/useToken";

function Private() {

    let [token] = useToken()

    if (token === 'kirish mumkin') {
        return <Outlet />
    }

    return <Navigate to='/login' />
}

export default Private