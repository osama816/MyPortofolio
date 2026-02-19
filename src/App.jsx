import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import "./App.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function App() {
  // Initialize toastr options
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-center",
    timeOut: 5000, // 5 seconds
  };

  return (
    <div className="min-h-[100vh] dark:bg-gradient-to-tr dark:from-slate-800 dark:to-gray-900 dark:text-white">
      <Header />
      <div id="toast-container" className="mt-4 toast-top-center outline-2 outline-blue-400" />
  <Home />
  <About />
  <Skills />
  <Certificates />
  <Projects />
  <Contact />
  <Footer />
    </div>
  );
}

export default App;
