import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    const { user, setUser, AppisLoading, setAppisLoading } = useContext(AuthContext);
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    } return (<>
        <Navigate to={"/login"} replace={true} />
    </>)
}
export default PrivateRoute;