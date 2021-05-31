import React from 'react';
import Grid from './Grid';
import Header from './Header';
import Nav from './Nav';
import AddressSearchForm from '../components/AddressSearchForm';

export default function Home(): React.ReactElement {  
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.display = 'none';
  };
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
        <div id="home__modal" onClick={closeModal}>
          <div className="home__modal-content">
            <span className="home__modal---close">&times;</span>
            <p>
              Thanks for checking out Biblio, a project to help promote book access in the community.
              Biblio taps into the existing Little Free Library network and builds upon it by allowing users to sponser
              their local Little Free Libraries, expanding its offering.
            </p>
            <p>
              This is currently a demo with a limited dataset. All searches will, for the time being, be limited
              to the current available area. More Little Free Libraries to come! 
            </p>
          </div>
        </div>
      </Grid>
    </section>
  );
};