// taken from: https://reactrouter.com/web/example/auth-workflow
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return <Route {...rest} render={() => (auth.user ? children : <Redirect to="/admin" />)} />;
}
