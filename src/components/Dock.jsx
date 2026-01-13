import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { dockApps } from "#constants/index.js";
import { Tooltip } from "react-tooltip";
import useWindowStore from "#store/Window.jsx";
import { useTranslation } from "react-i18next";


const Dock = () => {
  const dockRef = useRef(null);
  const {t} = useTranslation();
  const { openWindow, closeWindow, restoreWindow , focusWindow, windows } = useWindowStore();


  const toggleApp = (app) => {
    if (!app.canOpen) return;
  
    const win = windows[app.id];
  
    if (!win.isOpen) {
      openWindow(app.id);
    } else if (win.isMinimized) {
      restoreWindow(app.id);
    } else {
      closeWindow(app.id);
    }
  };
  

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container ">
        {dockApps.map(({ id, name, icon, canOpen }) => {
            const win = windows[id]; 
            return(
          <div key={id} className=" flex relative  justify-center">
            <button
              type="button"
              className={`dock-icon ${
                win?.isOpen ||  win?.isMinimized ? "border border-gray-400 rounded-xl" : ""
              }`}
              aria-label={t(name)}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={t(name)}
              data-tooltip-delay-show={150}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={icon}
                alt={t(name)}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        )})}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
