import React from 'react';
import PropTypes from 'prop-types';

import WorkoutModel from '../WorkoutModel/index';
import WorkoutItem from '../WorkoutItem/index';

function WorkoutsList(props) {
  const { workouts, onRemove: handleRemove } = props;
  return (
    <ul>
      {workouts.map((el) => (
        <WorkoutItem key={el.id} workout={el} onRemove={handleRemove} />
      ))}
    </ul>
  );
}

WorkoutsList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.instanceOf(WorkoutModel)).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default WorkoutsList;
