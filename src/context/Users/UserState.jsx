import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = () => {
  const initialState = {
    users: [],
    selectedUser: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const getUser = () => {};
  const getProfile = () => {};
  return (
    //   le pasamos en el provide como value a que pueden acceder los elementos hijos
    <UserContext.Provide
      value={{ user: state.users, selectedUser: state.selectedUser, getUser,getProfile}}
    >
      {/* Cualquier componente que este dentro de UserState puede hacer uso de todo el estado definido  */}
      {props.children} 
    </UserContext.Provide>
  );
};

export default UserState;
