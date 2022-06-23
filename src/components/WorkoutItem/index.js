import React from 'react';
import PropTypes from 'prop-types';

import WorkoutModel from '../WorkoutModel/index';

function WorkoutItem(props) {
  const { workout, onRemove: handleRemove } = props;
  return (
    <li key={workout.id}>
      <div> {workout.date.toLocaleDateString('Ru')}</div>
      <div> {workout.distance}</div>
      <div>
        <button onClick={() => handleRemove(workout.id)}>Remove</button>
      </div>
    </li>
  );
}

WorkoutItem.propTypes = {
  workout: PropTypes.instanceOf(WorkoutModel).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default WorkoutItem;
