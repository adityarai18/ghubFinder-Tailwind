import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search Results
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await res.json();

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };

  // // clear users
  // const clearUsers = () => {
  //   dispatch({
  //     type: 'CLEAR_USERS',
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
