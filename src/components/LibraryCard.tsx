import React from 'react';
import Grid from './Grid';
import {Link} from 'react-router-dom';
import Sponser from './Sponser';

interface LibraryCardProps {
  className: string;
  grid: string;
  id: number;
  charter: string;
  name: string;
  sponsers?: {
    id: number; 
    user: {
      id: number;
      first_name: string;
      last_name: string;
    }
  }[];
};

export default function LibraryCard({className, grid, id, charter, name, sponsers}: LibraryCardProps): React.ReactElement {
  let sponsersList;
  if(sponsers) {
    sponsersList = sponsers.map((sponser) => {
      return(
        <Sponser key={sponser.id} id={sponser.id} lib_id={id} first_name={sponser.user.first_name} last_name={sponser.user.last_name} />
      );
    });
  };
  return(
    <section className={className}>
      <Grid className={grid}>
        <section>
          <h1 className="library-card__charter">{charter}</h1>
          <h3 className="library-card__name">{name}</h3>
        </section>
        {className === "library__library-card--no-border" ? 
          <section className="library__library-card-sponsers-list">
            <Grid className="library__library-card-sponsers-list-grid">
              {sponsersList}
            </Grid>
          </section>
          : 
          <Link to={`/results/little_libraries/${id}`} className="library-results__library-card-library-link">see more</Link>
        }
      </Grid>
    </section>
  );
};