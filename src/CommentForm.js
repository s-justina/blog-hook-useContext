import React from "react";
import { AuthenticationContext } from "./AuthenticationContext";

const MESSAGES = {
  happy: "I'd love to read it!",
  normal: "",
  sad: "I will read it if I have to."
};

export default function CommentForm({ currentMood = "normal" }) {
  return (
    <AuthenticationContext.Consumer>
      {({ currentUser }) => {
        const canComment = currentUser;
        const title = canComment
          ? `Hey ${currentUser.name}, why don't you leave a comment?`
          : "Hey stranger, please log in and leave a comment.";
        const subtitle = MESSAGES[currentMood];
        return (
          <div className="comment-form">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <textarea disabled={!canComment} />
            <br />
            <button disabled={!canComment}>Post comment</button>
          </div>
        );
      }}
    </AuthenticationContext.Consumer>
  );
}
