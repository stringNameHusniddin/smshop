import { createContext, useReducer } from "react";

const initialValue = {
  data: [],
  user: "",
  users: "",
  comentariya: [],
  messages: [],
  detailId: 0,
  messages_private: [],
  search: "",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "change_search":
      return { ...state, search: payload };
    case "get_data":
      return { ...state, data: payload };
    case "get_users":
      return { ...state, users: payload };
    case "get_messages":
      return { ...state, messages: payload };
    case "get_private_messages":
      return { ...state, messages_private: payload };
    case "get_c":
      return { ...state, comentariya: payload };
    case "push_c":
      return { ...state, comentariya: [...state.comentariya, payload] };
    case "push_g":
      return { ...state, messages: [...state.messages, payload] };
    case "push_p":
      return {
        ...state,
        messages_private: [...state.messages_private, payload],
      };
    case "push_users":
      return { ...state, users: [...state.users, payload] };
    case "push_data":
      return { ...state, data: [...state.data, payload] };
    case "change_id":
      return { ...state, detailId: payload };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;
