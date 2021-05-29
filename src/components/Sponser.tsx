import React from 'react';
import Grid from './Grid';
import {Link} from 'react-router-dom';

interface SponserProps {
  id: number;
  lib_id: number;
  first_name: string;
  last_name: string;
}

export default function Sponser({id, lib_id, first_name, last_name}: SponserProps): React.ReactElement {
  return(
    <section className="sponser">
      <Grid className="sponser__grid">
        <img className="sponser__profile-pic" alt="" src="https://i.imgur.com/CT792ej.jpg"></img>
        <p className="sponser__name">
          {first_name} {last_name}
          <Link className="sponser__link" to={`/results/little_libraries/${lib_id}/sponsers/${id}`}>see collection</Link>  
        </p>
      </Grid>
    </section>
  )
}