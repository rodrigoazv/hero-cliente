import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './pages/routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
