import ControlIcon from "./ControlCenter";
import { useControlStore } from "#store/ControlStore";
import {
  Wifi,
  Bluetooth,
  House,
  Sun,
  Moon,
  Keyboard,
  Airplay,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const ControlCenter = () => {
  const [open, setOpen] = useState(false);
  const options = [
    { id: "ar", label: "العربية" },
    { id: "en", label: "English" },
  ];

  const {
    wifi,
    bluetooth,
    airDrop,
    sound,
    display,
    language,
    theme,
    toggleWifi,
    toggleBluetooth,
    toggleAirDrop,
    setSound,
    setDisplay,
    setLanguage,
    toggleTheme,
    isOpen,
  } = useControlStore();

  if (!isOpen) return null;

  return (
    <div className="controlcenter">
      <div className="control-top-container">
        <div className="control-left ">
          <div className="control-left-icon" onClick={toggleWifi}>
            <Wifi className={wifi ? "text-sky-400" : ""} />
            <span>Wifi</span>
          </div>
          <div className="control-left-icon" onClick={toggleBluetooth}>
            <Bluetooth className={bluetooth ? "text-sky-400" : ""} />
            <span>Bluetooth</span>
          </div>
          <div className="control-left-icon" onClick={toggleAirDrop}>
            <House className={airDrop ? "text-sky-400" : ""} />
            <span>AirDrop</span>
          </div>
        </div>

        <div className="control-mode col-2" onClick={() => toggleTheme()}>
          {theme === "light" ? (
            <Sun className="text-sky-400" />
          ) : (
            <Moon className="text-sky-400" />
          )}

          <span>Mode</span>
        </div>

        <div className="control-right-button col-2 ">
          <div className=" control-right-icon">
            <Keyboard className="m-auto " />
            <span>Keyboard</span>
          </div>
          <div className=" control-right-icon ">
            <Airplay className="m-auto" />
            <span>AirPlay</span>
          </div>
        </div>
      </div>

      <div className="mb-2 control-inputs">
        <label>Display</label>
        <input
          className="control-range"
          type="range"
          min="0"
          max="100"
          value={display}
          onChange={(e) => setDisplay(Number(e.target.value))}
        />
      </div>

      <div className="mb-2 control-inputs">
        <label>Sound</label>
        <input
          className="control-range"
          type="range"
          min="0"
          max="100"
          value={sound}
          onChange={(e) => setSound(Number(e.target.value))}
        />
      </div>

      <div className=" control-inputs text-left">
        <button className="control-language-btn" onClick={() => setOpen(!open)}>
          {language === "ar" ? "العربية" : "English"}
          <ChevronDown />
        </button>
        {open && (
          <div className="control-choose">
            <div className="py-1">
            {options.map((option) => (
                <button key={option.id} onClick={() => {
                    setLanguage(option.id);
                    setOpen(false);
                  }}
                  className="control-check"
                >
               {option.label}
                
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlCenter;
