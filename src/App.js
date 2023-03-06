import React, { useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Title from "./components/Title";

function App() {
  const [showEvents, setshowEvents] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setshowModal(false);
  };
  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleShow = () => setshowEvents(showEvents ? false : true);
  const handleShowModal = () => setshowModal(true);

  const subtitle = "Lorem ipsum dolor sit amet consectetur";

  return (
    <div className="App">
      <Title title="quibusdam natus" subtitle={subtitle} />
      <div>
        <button onClick={handleShow}>
          {showEvents ? "Hide events" : "Show events"}
        </button>
      </div>
      {showEvents && <EventList events={events} handleDelete={handleDelete} />}
      {showModal && (
        <Modal handleShowModal={handleShowModal} isSalesModal={true}>
          <NewEventForm handleAddEvent={handleAddEvent} />
        </Modal>
      )}
      <div style={{ marginTop: "40px" }}>
        <button onClick={handleShowModal}>Add new Events</button>
      </div>
    </div>
  );
}

export default App;
