import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            component={() => {
              <Form />;
            }}
          />
          <Route path="/contacts" exact component={Render} />
        </Routes>
      </Router>
      {/* <Form getDataHandler={getDataHandler} />
      <Render list={contactList} deleteContact={deleteContact} /> */}
    </div>
  );
}
