import React from "react";
const MESSAGES = {
  happy: "Great to see you!",
  normal: "",
  sad: "Have a good day, I guess..."
};

export default function UserGreeting({ currentUser, currentMood = "normal" }) {
  const message = MESSAGES[currentMood];
  return (
    <>
      <h2>Hi {currentUser ? currentUser.name : "stranger"}</h2>
      <h3>{message}</h3>
    </>
  );
}
