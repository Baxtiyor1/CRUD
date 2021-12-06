import { Outlet } from "react-router";
import useToken from "../Hook/useToken";

function Public() {

    let [token] = useToken()

    if(token === 'kirish mumkin'){
        return <Outlet />
    }

    return <Outlet />

}

export default Public