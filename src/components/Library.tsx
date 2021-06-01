import React from 'react';
import Grid from './Grid';
import LibraryCard from './LibraryCard';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {AppState} from '../index';
import {Route, Switch, Redirect} from 'react-router-dom';
import LibraryBook from './LibraryBook';
import SponserBook from './SponserBook';
import LibraryBooks from './LibraryBooks';
import SponserBooks from './SponserBooks';
import LibraryBooksNew from './LibraryBooksNew';

interface MatchParams {
  id: string;
}

export default function Library({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  const redirect = useSelector((state: AppState) => state.libraryBooks.redirect)
  const dispatch = useDispatch();
  const getLibrary = () => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.id}`, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_LIBRARY", selectedLib: {id: json.id, charter: json.charter, name: json.name, sponsers: json.sponsers, books: json.books}})
    });
  };

  let name = "";
  let dewey_style_charter = "";
  const lib = useSelector((state: AppState) => state.results.selectedLib);
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
    if(lib.id !== parseInt(match.params.id)) {
      getLibrary();
    } else if(redirect) {
      dispatch({type: 'STOP_REDIRECT'});
    };
  });

  return(
    <section className="library">
      <Grid className="library__grid">
        <LibraryCard className="library__library-card--no-border" grid="library__library-card-grid" id={lib.id} charter={dewey_style_charter} name={name} sponsers={lib.sponsers} />
        <Switch>
          <Route path="/results/little_libraries/:little_library_id/sponsers/:sponser_id/sponser_books/:id" render={(props) => <SponserBook {...props} /> } />
          {redirect ? 
            <Redirect to={`/results/little_libraries/${match.params.id}`} />
          :
            <Route path="/results/little_libraries/:little_library_id/library_books/new" render={(props) => <LibraryBooksNew {...props} /> } />
          }
          <Route path="/results/little_libraries/:little_library_id/sponsers/:id" render={(props) => <SponserBooks {...props} />} />
          <Route path="/results/little_libraries/:little_library_id/library_books/:id" render={(props) => <LibraryBook {...props} />} />
          <Route path="/results/little_libraries/:id" render={(props) => <LibraryBooks {...props} />} />
        </Switch>
      </Grid>
    </section>
  )  
}
