export default () => {
  return (next) => {
    return (action) => {
      return Array.isArray(action) ? action.map(next) : next(action);
    };
  };
};
