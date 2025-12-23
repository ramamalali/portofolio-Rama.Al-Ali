import "./App.css";
import { Navbar, Welcome, Dock } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import { Terminal } from "#Windows";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
      </main>
    </>
  );
};

export default App;
