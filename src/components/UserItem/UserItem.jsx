import React from "react";
import "./UserItem.css";

function UserItem({ user, onItemDelete }) {
  const { email, name, salariu, isGoldClient, imagine, id  } = user;

  return (
    <div className="user-item">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{salariu}</p>
      {isGoldClient ? <p> CLIENT GOLD </p> : null}
      <img src={imagine} alt="Imagine" width="150px" />
      <br />
      <button onClick={() => onItemDelete(id)}>Stergere</button>
    </div>
  );
}

export default UserItem;
