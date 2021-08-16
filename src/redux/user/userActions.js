const setCurrentUser = (userData) => {
  return { type: 'SET_CURRENT_USER', payLoad: userData };
};

export { setCurrentUser };
