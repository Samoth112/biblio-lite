import React from 'react';
import {Link} from 'react-router-dom';
import Grid from './Grid';
import Header from './Header';
import LibraryResults from './LibraryResults';
import Nav from './Nav';

export default function SearchResults(): React.ReactElement {
  return(
    <section className="search-results">
      <Grid className="search-results__grid">
        <Header className="search-results__header" grid="search-results__header-grid">
          <Nav className="search-results__nav" grid="search-results__nav-grid">
            <p className="search-results__nav-logo">
              <Link to="/results" className="search-results__nav-logo-link"><span>Biblio</span></Link>
            </p>
          </Nav>
        </Header>
        <LibraryResults />
      </Grid>
    </section>
  )
}