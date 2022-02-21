import { GET_PROFILE, GET_USERS } from "../Type";

//funcion anonima para saber como esta el estado y una accion para actualizar estado
export default (state, action) => {
  const { data, type } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state, //copia el estado
        users: data, //actualizar con los datos que me estan pasando
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: data,
      };
    default:
      return state;
  }
};
