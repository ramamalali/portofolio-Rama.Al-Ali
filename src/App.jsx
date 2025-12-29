import "./App.css";
import { Navbar, Welcome, Dock , Home , ControlCenter } from "#components";
import { Terminal, Safari, Resume, Finder , Text , ImageWindowContent , Contact , Trash , Photos } from "#Windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />
        <Dock />
        <ControlCenter />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindowContent />
        <Contact />
        <Home />
        <Trash />
        <Photos />
      </main>
    </>
  );
};

export default App;
