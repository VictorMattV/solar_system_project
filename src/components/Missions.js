import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div className="div-mission-container">
        <Title headline="Missões" />
        <div className="div-missions" data-testid="missions">
          {
            missions.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
