import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="div-planet-card">
        <p data-testid="planet-name">
          {planetName}
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </p>
      </div>

    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
