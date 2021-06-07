import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Grid from './Grid';
import LibraryBookForm from './LibraryBookForm';

interface MatchParams {
  littleLibraryId: string;
}

export default function LibraryBooksNew({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  return(
    <section className="library-books-new">
      <Grid className="library-books-new-grid">
        <LibraryBookForm littleLibraryId={match.params.littleLibraryId}/>
      </Grid>
    </section>
  );
};