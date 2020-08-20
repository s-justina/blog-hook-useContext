import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserSelector from "./UserSelector";
import CommentForm from "./CommentForm";
import UserGreeting from "./UserGreeting";

import "./styles.css";
import { AuthenticationContext } from "./AuthenticationContext";

function Header() {
  return (
    <header className="header">
      <h1>Moody blog</h1>
      <UserGreeting />
      <UserSelector />
    </header>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <AuthenticationContext.Provider
        value={{
          onLogin: setCurrentUser,
          onLogout: () => setCurrentUser(null),
          currentUser
        }}
      >
        <Header />
        <Article title="Doctors hate him" />
        <Article title="You won't believe what happened next" />
        <Article title="10 best things..." />
        <Article title="Blatant clickbait" />
      </AuthenticationContext.Provider>
    </div>
  );
}

function Article({ title }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <CommentForm />
    </article>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
