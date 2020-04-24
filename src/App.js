import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroMUI from "./components/HeroMUI"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        {/* <Hero /> */}
        <HeroMUI/>
        <Projects />
        <BlogPosts />
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
