export default defineEventHandler(() => {
  // TODO: Clear session from db
  // TODO: deleteCookie

  return {
    succes: true,
    message: 'Successfully logged out.',
  };
});
