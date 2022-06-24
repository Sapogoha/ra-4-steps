import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import WorkoutModel from '../WorkoutModel/index';
import WorkoutItem from '../WorkoutItem/index';

function WorkoutsList(props) {
  const { workouts, onRemove: handleRemove } = props;
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div className={styles.date}>Date</div>
        <div className={styles.distance}>Distance, km</div>
        <div className={styles.remove}>Actions</div>
      </div>
      <ul className={styles.list}>
        {workouts.map((el) => (
          <WorkoutItem key={el.id} workout={el} onRemove={handleRemove} />
        ))}
      </ul>
    </div>
  );
}

WorkoutsList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.instanceOf(WorkoutModel)).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default WorkoutsList;
