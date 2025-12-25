import "./App.css";
import { Navbar, Welcome, Dock } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import { Terminal, Safari, Resume, Finder , Text , ImageWindowContent , Contact} from "#Windows";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindowContent />
        <Contact />
      </main>
    </>
  );
};

export default App;
