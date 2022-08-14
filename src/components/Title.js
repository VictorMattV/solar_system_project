import PropTypes from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="div-title">
        <h2>
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
