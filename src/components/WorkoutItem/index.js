import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import WorkoutModel from '../WorkoutModel/index';

function WorkoutItem(props) {
  const { workout, onRemove: handleRemove } = props;
  return (
    <li key={workout.id} className={styles.row}>
      <div className={styles.date}>
        {workout.date.toLocaleDateString('Ru')}{' '}
      </div>
      <div className={styles.distance}> {workout.distance.toFixed(2)}</div>
      <div className={styles.remove}>
        <button
          className={styles.button}
          onClick={() => handleRemove(workout.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

WorkoutItem.propTypes = {
  workout: PropTypes.instanceOf(WorkoutModel).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default WorkoutItem;
