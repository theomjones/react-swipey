import React from "react";
import { render } from "react-dom";
import Swipey from "../../dist";

const list = [
  "Home",
  "About",
  "Blog",
  "Products",
  "Github",
  "Twitter",
  "Privacy",
  "Account"
];

const App = () => (
  <div>
    <Swipey
      background="#3e60e8"
      style={{ borderBottom: "solid 2px #fce250" }}
      align="center"
    >
      {list.map(el => (
        <div key={el}>
          <a
            style={{ color: "white", fontWeight: 500, textDecoration: "none" }}
            href="https://twitter.com/theomjones"
          >
            {el}
          </a>
        </div>
      ))}
    </Swipey>

    <div style={{ padding: "0 10px", maxWidth: "750px", margin: "0 auto" }}>
      <h1>React Swipey</h1>
      <p>A swipable navigation solution, perfect for mobile.</p>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
