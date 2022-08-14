import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-content">
        <Title headline="Planetas" />
        <div className="div-planet-container">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
