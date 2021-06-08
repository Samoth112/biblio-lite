import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RouteComponentProps, Route, Switch, Redirect} from 'react-router-dom';
import {AppState} from '../index';
import Grid from './Grid';
import LibraryBook from './LibraryBook';
import LibraryBooks from './LibraryBooks';
import LibraryBooksNew from './LibraryBooksNew';
import LibraryCard from './LibraryCard';
import SponserBook from './SponserBook';
import SponserBooks from './SponserBooks';

// component rendered through Route render prop takes MatchParams
interface MatchParams {
  id: string;
}

export default function Library({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  let name = "";
  let dewey_style_charter = "";
  const lib = useSelector((state: AppState) => state.results.selectedLib);
  const redirect = useSelector((state: AppState) => state.libraryBooks.redirect);
  debugger;
  // the redirect property is set in the libraryBooksReducer. The LibraryBooks component will
  // dispatch the SET_LIBRARY_BOOKS action, which sets redirect to true.
  // If true, 
  const dispatch = useDispatch();
  const getLibrary = () => {
    debugger;
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.id}`, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then((json) => {
      debugger;
      dispatch({type: "SET_LIBRARY", selectedLib: {id: json.id, charter: json.charter, name: json.name, sponsers: json.sponsers, books: json.books}})
    });
  };

  if(lib.id === parseInt(match.params.id)) {
    name = lib.name
    let iter = 1;
    lib.charter.toString().split("").forEach((char) => {
      dewey_style_charter += char;
      if(iter === 3) {
        dewey_style_charter += ".";
        iter = 1;
      } else {
        iter++;
      };
    });
  };

  useEffect(() => {
    debugger;
    if(lib.id !== parseInt(match.params.id)) {
      debugger;
      getLibrary();
    } else if(redirect) {
      debugger;
      dispatch({type: 'STOP_REDIRECT'});
    };
  });

  return(
    <section className="library">
      <Grid className="library__grid">
        <LibraryCard className="library__library-card--no-border" grid="library__library-card-grid" id={lib.id} charter={dewey_style_charter} name={name} sponsers={lib.sponsers} />
        <Switch>
          <Route path="/results/little_libraries/:littleLibraryId/sponsers/:sponserId/sponser_books/:id" render={(props) => <SponserBook {...props} /> } />
          <Route path="/results/little_libraries/:littleLibraryId/sponsers/:id" render={(props) => <SponserBooks {...props} />} />
          {redirect ? 
            <Redirect to={`/results/little_libraries/${match.params.id}`} />
          :
            <Route path="/results/little_libraries/:littleLibraryId/library_books/new" render={(props) => <LibraryBooksNew {...props} /> } />
          }
          <Route path="/results/little_libraries/:littleLibraryId/library_books/:id" render={(props) => <LibraryBook {...props} />} />
          <Route path="/results/little_libraries/:id" render={(props) => <LibraryBooks {...props} />} />
        </Switch>
      </Grid>
    </section>
  )  
}
