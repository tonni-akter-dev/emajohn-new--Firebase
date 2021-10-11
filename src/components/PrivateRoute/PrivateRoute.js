import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
    let { users } = useAuth();
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    users.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: location
                                }
                            }}
                        ></Redirect>
                    )
            }


        ></Route>
    );
};

export default PrivateRoute;