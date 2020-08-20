import React from "react";

export const ALL_MOODS = ["happy", "normal", "sad"];

export default function MoodSelector({ currentMood, onCurrentMoodChange }) {
  return (
    <div>
      {ALL_MOODS.map(mood => (
        <button
          key={mood}
          disabled={currentMood === mood}
          onClick={() => onCurrentMoodChange(mood)}
        >
          Set {mood} mood.
        </button>
      ))}
    </div>
  );
}
