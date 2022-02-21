import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/Users/UserContext";

const UserList = () => {
  // aqui accedo al contexto que quiero acceder
  const { getUsers,getProfile } = useContext(UserContext);
  useEffect(() => {
    getUsers();
    getProfile(1)
    
  }, []);
  return <div></div>;
};

export default UserList;
