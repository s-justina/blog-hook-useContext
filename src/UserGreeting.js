import React from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { MoodContext } from "./MoodContext";

const MESSAGES = {
  happy: "Great to see you!",
  normal: "",
  sad: "Have a good day, I guess..."
};

export default function UserGreeting() {
  return (
    <MoodContext.Consumer>
      {({ currentMood }) => {
        const message = MESSAGES[currentMood];
        return (
          <AuthenticationContext.Consumer>
            {({ currentUser }) => (
              <>
                <h2>Hi {currentUser ? currentUser.name : "stranger"}</h2>
                <h3>{message}</h3>
              </>
            )}
          </AuthenticationContext.Consumer>
        );
      }}
    </MoodContext.Consumer>
  );
}
