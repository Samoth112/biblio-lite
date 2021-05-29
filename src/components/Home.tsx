import React from 'react';
import Grid from './Grid';
import Header from './Header';
import Nav from './Nav';
import AddressSearchForm from '../components/AddressSearchForm';

export default function Home(): React.ReactElement {
  return(
    <section className='home'>
      <Grid className="home__grid">
        <Header className="home__header" grid="home__header-grid">
          <Nav className="home__nav" grid="home__nav-grid">
            <p className="home__nav-logo">
              Biblio
            </p>
          </Nav>
          <section className="home__address-search-form">
            <Grid className="home__address-search-form-grid">
              <p className="home__address-search-form-headline">
                Enter Your Address to Find Books Near You
              </p>
              <AddressSearchForm />
            </Grid>
          </section>
        </Header>
      </Grid>
    </section>
  );
};