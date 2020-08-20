import React from "react";

export const ALL_USERS = [{ name: "Bob" }, { name: "Alice" }];

export default function UserSelector({ onLogin, onLogout, currentUser }) {
  return (
    <div>
      {ALL_USERS.map(user => (
        <button
          key={user.name}
          disabled={currentUser === user}
          onClick={() => onLogin(user)}
        >
          Login as {user.name}
        </button>
      ))}
      <button disabled={!currentUser} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
