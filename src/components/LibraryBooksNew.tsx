import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Grid from './Grid';
import LibraryBookForm from './LibraryBookForm';

interface MatchParams {
  little_library_id: string;
}

export default function LibraryBooksNew({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  return(
    <section className="library-books-new">
      <Grid className="library-books-new-grid">
        <LibraryBookForm little_library_id={match.params.little_library_id}/>
      </Grid>
    </section>
  );
};