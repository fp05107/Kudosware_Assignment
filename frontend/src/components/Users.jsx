import React, { useEffect, useState } from "react";
import { getData } from "./api";
import Navbar from "./Navbar"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData().then((res) => setUsers(res));
  }, []);

  return (
    <div>
        <Navbar />
      {users.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.firstname}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
