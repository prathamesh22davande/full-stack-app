import React from "react";
import UserItem from "./UserItem";

import "./UsersList.css";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No users found!</div>;
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.placeCount}
        />
      ))}
    </ul>
  );
}

export default UsersList;
