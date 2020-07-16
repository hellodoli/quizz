import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { getTheme } from './selector/theme';
// Containers
import Home from './containers/Home';
import Quizzs from './containers/Quizzs';

// Dynamic loadable
/* const DynamicImport = (componentImport) =>
  Loadable({
    loader: componentImport,
    loading: () => null,
  }); */

function App() {
  const theme = useSelector(getTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* CSS Global */}
        <CssBaseline />
        {/* Main App */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quizzs" component={Quizzs} />
          <Route
            path="*"
            render={() => <div>Hello, This is 404 page !!!</div>}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
