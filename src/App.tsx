import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './pages/routes';
import GlobalStyle from './styles/global';
import FullThemeLight from './styles/themes/themes';
import Snack from './components/Common/SnackBar';

function App() {
  return (
    <ThemeProvider theme={FullThemeLight}>
      <BrowserRouter>
        <Snack />
        <GlobalStyle />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
