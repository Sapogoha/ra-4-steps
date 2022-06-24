import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './index.module.css';

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
    <form onSubmit={handleAdd} className={styles.form}>
      <label htmlFor="date" className={styles.label}>
        Date
        <input
          id="date"
          name="date"
          placeholder="dd.mm.yyyy"
          type="date"
          required="required"
          value={form.date}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label htmlFor="distance" className={styles.label}>
        Distance, km
        <input
          id="distance"
          name="distance"
          placeholder="x km"
          type="number"
          required="required"
          value={form.distance}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
}

AddWorkoutForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddWorkoutForm;
