import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </p>
      </div>

    );
  }
}

export default PlanetCard;
