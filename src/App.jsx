import "./App.css";
import { Navbar, Welcome, Dock, Home, ControlCenter } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  ImageWindowContent,
  Contact,
  Trash,
  Photos,
} from "#Windows";
import { useControlStore } from "#store/ControlStore";



import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  const { theme } = useControlStore();




  return (
    <>
    <div className={theme === "dark" ? "dark" : ""}>
      <main className="min-h-screen dark:bg-gray-900 dark:text-white">
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
      </div>
    </>
  );
};

export default App;
