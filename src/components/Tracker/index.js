import React, { useState } from 'react';

import AddWorkoutForm from '../AddWorkoutForm/index';
import WorkoutsList from '../WorkoutsList/index';

function Tracker(props) {
  const [data, addData] = useState([]);

  data.find((item) => item);

  const handleAdd = (workout) => {
    const notUniqueDate = data.findIndex(
      (item) => item.date.getTime() === workout.date.getTime()
    );

    if (notUniqueDate !== -1) {
      data[notUniqueDate].distance += Number(workout.distance);
      // не понимаю, как иначе обновлять значение после добавления. должен же быть способ лучше
      addData((prevWorkouts) => [...prevWorkouts]);
    } else {
      addData((prevWorkouts) => [...prevWorkouts, workout]);
    }
  };

  const handleRemove = (id) => {
    addData((prevWorkouts) => prevWorkouts.filter((el) => el.id !== id));
  };

  const sorted = data.sort((b, a) => a.date - b.date);

  return (
    <>
      <AddWorkoutForm onAdd={handleAdd} />
      <WorkoutsList workouts={sorted} onRemove={handleRemove} />
    </>
  );
}

export default Tracker;
