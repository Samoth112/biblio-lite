import React from 'react';
import Grid from './Grid';
import LibraryResults from './LibraryResults'
import Header from './Header';
import Nav from './Nav';
import {Link} from 'react-router-dom';
 
export default function SearchResults(): React.ReactElement {
  return(
    <section className="search-results">
      <Grid className="search-results__grid">
        <Header className="search-results__header" grid="search-results__header-grid">
          <Nav className="search-results__nav" grid="search-results__nav-grid">
            <p className="search-results__nav-logo">
              <Link to="/results">Biblio</Link>
            </p>
          </Nav>
        </Header>
        <LibraryResults />
      </Grid>
    </section>
  )
}