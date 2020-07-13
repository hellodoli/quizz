import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Loadable from 'react-loadable';
import { getTheme } from './selector/theme';

// Components
// Containers
import Home from './containers/Home';
import Quizzs from './containers/Quizzs';

const Loading = () => <div>Loading...</div>;

const DynamicImport = (component) =>
  Loadable({
    loader: component,
    loading: Loading,
  });

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
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
