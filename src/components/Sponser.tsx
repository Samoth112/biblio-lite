import React from 'react';
import Grid from './Grid';
import {Link} from 'react-router-dom';

interface SponserProps {
  id: number;
  libId: number;
  firstName: string;
  lastName: string;
}

export default function Sponser({id, libId, firstName, lastName}: SponserProps): React.ReactElement {
  return(
    <section className="sponser">
      <Grid className="sponser__grid">
        <img className="sponser__profile-pic" alt="" src="https://i.imgur.com/CT792ej.jpg"></img>
        <p className="sponser__name">
          {firstName} {lastName}
          <Link className="sponser__link" to={`/results/little_libraries/${libId}/sponsers/${id}`}>see collection</Link>  
        </p>
      </Grid>
    </section>
  )
}