import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isSignIn === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginPage",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
