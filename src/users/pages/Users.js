import React from "react";
import UsersList from "../components/UsersList";

function Users(props) {
  const USERS = [
    {
      id: "u1",
      name: "Prathamesh Davande",
      image: "https://picsum.photos/id/237/200/300",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "Sohan Sutar",
      image: "https://picsum.photos/200/300",
      placeCount: 5,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
