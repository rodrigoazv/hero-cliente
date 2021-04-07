import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from './pages/routes';
import GlobalStyle from './styles/global';
import FullThemeLight from './styles/themes/themes';
import Snack from './components/Common/snack-bar';
import { ApplicationState } from './store';
import { setAuth } from './store/ducks/user/actions';

function App() {
  const { auth } = useSelector((state: ApplicationState) => state.user);
  const { errorType } = useSelector(
    (state: ApplicationState) => state.notify.message,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorType === 'AuthFail') {
      dispatch(setAuth());
    }
  }, [errorType]);
  return (
    <ThemeProvider theme={FullThemeLight}>
      <BrowserRouter>
        <Snack />
        <GlobalStyle />
        <Switch>
          {routes.map((route) =>
            route.isProtected && !auth ? (
              <Redirect to={{ pathname: '/' }} />
            ) : (
              <Route
                key={route.name}
                path={route.path}
                exact
                component={route.component}
              />
            ),
          )}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
