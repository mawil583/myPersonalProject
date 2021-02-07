import React from "react";
import HelloWorld from "../components/HelloWorld";
import Counter from "../components/Counter";
import BlogPosts from "../components/BlogPosts";
import logo from "../logo.svg";
import "../App.css";

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
        <BlogPosts />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Homepage;