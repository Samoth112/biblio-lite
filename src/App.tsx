import React from 'react';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import {AppState} from './index';
import SearchResults from './components/SearchResults';

function App(): React.ReactElement {
  const searchSuccess = useSelector((state: AppState) => state.results.searchSuccess);

  return (
    <Router>
      <Route exact path="/">
        {searchSuccess ? <Redirect to="/results" /> : <Home />}
      </Route>
      <Route path="/results">
        <SearchResults />
      </Route>
    </Router> 
  );
};
export default App;
