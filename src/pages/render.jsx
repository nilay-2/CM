import React from "react";
const render = (props) => {
  return (
    <>
      {props.list.map((contact) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around"
          }}
          key={contact.id}
        >
          <h3>{contact.name}</h3>
          <button onClick={(e) => props.deleteContact(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default render;
