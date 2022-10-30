import React, { useState } from "react";
import uuid from "react-uuid";
import "./styles.css";
import Form from "./pages/form";
import Render from "./pages/render";
export default function App() {
  const [contactList, setContactList] = useState([]);
  const getDataHandler = (contact) => {
    setContactList([...contactList, { id: uuid(), ...contact }]);
  };
  const deleteContact = (id) => {
    console.log(id);
    const newId = id;
    const newList = contactList.filter((contact) => contact.id !== newId);
    setContactList(newList);
  };

  return (
    <div className="App">
      <h1> Contact Management </h1>
      <Form getDataHandler={getDataHandler} />
      <Render list={contactList} deleteContact={deleteContact} />
    </div>
  );
}
