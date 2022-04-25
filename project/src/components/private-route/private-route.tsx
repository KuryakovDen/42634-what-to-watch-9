import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
