import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'


const INITIAL_STATE = {
  user: {
    _id: "627845f0db2e16d38e9c2b34",
    username: "qui",
    email: "qui@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: ["62784207c3166f2949c8a512"],
    followings: [],
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}
