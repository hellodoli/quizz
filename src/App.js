import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// Themes
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import GlobalCss from './theme/GlobalCss';
import { getTheme } from './selector/theme';
// components
import PageNotFound from './components/PageNotFound';
// Containers
import Header from './components/Header';
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
        <GlobalCss />
        {/* Main App */}
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quizzs" component={Quizzs} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
