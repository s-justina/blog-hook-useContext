import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Header() {
  return (
    <header className="header">
      <h1>Moody blog</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Article title="Doctors hate him" />
      <Article title="You won't believe what happened next" />
      <Article title="10 best things..." />
      <Article title="Blatant clickbait" />
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
    </article>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
