import React from "react";
export const AuthenticationContext = React.createContext({
  currentUser: null,
  onLogin: () => {},
  onLogout: () => {}
});
