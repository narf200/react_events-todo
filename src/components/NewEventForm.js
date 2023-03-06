import React, { useState } from "react";
import styles from "./NewEventForm.module.css";

export default function NewEventForm({ handleAddEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleReset = () => {
    setTitle("");
    setDate("");
    setLocation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    handleAddEvent(event);
    handleReset();
  };

  return (
    <form className={styles.nev_event_form} onSubmit={handleSubmit}>
      <label>
        <span>Event title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event data:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location:</span>
        <select
          type="location"
          onChange={(e) => setLocation(e.target.value)}
          value={date}
        >
          <option value="Belgrade">Belgrade</option>
          <option value="Moscow">Moscow</option>
          <option value="Omsk">Omsk</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
