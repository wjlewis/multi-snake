import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../redux/app';

export interface ProtectedRouteProps extends RouteProps {
  isInDen: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
  const { isInDen, children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isInDen ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  isInDen: state.id !== null,
});

export default connect(mapStateToProps)(ProtectedRoute);
