import React, { useState } from "react";
const Form = (props) => {
  const [contact, setContact] = useState({ name: "" });
  const clearInput = () => {
    setContact({ ...contact, name: "" });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (contact.name === "") {
      alert("all fiedls are compulsory");
      return;
    } else {
      props.getDataHandler(contact);
      clearInput();
    }
  };
  return (
    <>
      <form action="submit" onSubmit={submitHandler}>
        <input
          type="text"
          value={contact.name}
          placeholder="Name"
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
