export const withLoadingSpinner = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};
