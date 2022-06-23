import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Workout from '../WorkoutModel/index';

function AddWorkoutForm(props) {
  const { onAdd } = props;
  const emptyFormState = { date: '', distance: '' };
  const [form, setForm] = useState(emptyFormState);

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (form.date === '' || form.distance === '') {
      return;
    }

    const date = new Date(form.date);
    const workout = new Workout(nanoid(), date, Number(form.distance));
    onAdd(workout);
    setForm({ date: '', distance: '' });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor="date">
        Date (dd.mm.yyyy)
        <input
          id="date"
          name="date"
          placeholder="dd.mm.yyyy"
          type="date"
          required="required"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="distance">
        Distance, km
        <input
          id="distance"
          name="distance"
          placeholder="x km"
          type="number"
          required="required"
          value={form.distance}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

AddWorkoutForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddWorkoutForm;
