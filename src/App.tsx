import React from 'react';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import {AppState} from './index';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

function App(): React.ReactElement {
  // the searchSuccess property is set in the SET_RESULTS action, which is called from
  // the submitAddress callback in AddressSearchForm component. Once the promise is resolved,
  // it checks the status of the json data sent back from the api. If true, the action is dispatched.
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
