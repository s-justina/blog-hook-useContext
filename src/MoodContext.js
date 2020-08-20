import React from "react";
export const MoodContext = React.createContext({
  currentMood: null,
  onCurrentMoodChange: () => {}
});
