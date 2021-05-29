import React from 'react';
import Map from './Map';
import {useSelector} from 'react-redux';
import {AppState} from '../index';
import {useEffect} from 'react';
import Grid from './Grid';
import LibraryCard from './LibraryCard';
import {
  Switch,
  Route
} from 'react-router-dom';
import Library from './Library';

export default function LibraryResults(): React.ReactElement {
  const loadGMaps = (callback: () => void) => {  
    const existingScript = document.getElementById('googleMaps');  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOz3XAmh2NXdx5QD6OcabXkMlD817NyQw';
      script.id = 'googleMaps';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };

  const lat = useSelector((state: AppState) => state.results.coordinates.center.lat);
  const lng = useSelector((state: AppState) => state.results.coordinates.center.lng);
  const libraries = useSelector((state: AppState) => state.results.libraries);
  
  useEffect(() => {
    loadGMaps(() => {
      const mapDiv = document.getElementById('map') as HTMLElement;
      const google = window.google;
      const map = new google.maps.Map(mapDiv, {
        center: {lat: lat, lng: lng},
        zoom: 12
      });
      libraries.forEach((lib) => {
        new google.maps.Marker({
          position: lib.address,
          map
        });
      }); 
    });
  });
  
  const librariesList = libraries.map((lib) => {
    let dewey_style_charter = "";
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
  
    return(
      <LibraryCard 
        key={lib.id} 
        id={lib.id} 
        className="library-results__library-card--libraries-list-item" 
        grid="library-results__library-card-grid"
        charter={dewey_style_charter} 
        name={lib.name} />
    );
  });

  return(
    <section className="library-results">
      <Grid className="library-results__grid" >
        <Route path="/results" render={(props) =>
          <Map {...props} className="map" grid="map-grid" />
        } />
        <Switch>
          <Route exact path="/results">
            <section className="library-results__libraries-list">
              <Grid className="library-results__libraries-list-grid">
                {librariesList}
              </Grid>
            </section>
          </Route>
          <Route path="/results/little_libraries/:id" render={(props) => 
            <Library {...props} />
          } />
        </Switch>
      </Grid>
    </section>
  );
};