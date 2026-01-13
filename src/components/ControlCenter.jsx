import { 
  Wifi, 
  Bluetooth, 
  House, 
  Sun, 
  Moon, 
  Keyboard, 
  Airplay, 
  ChevronDown 
} from "lucide-react";
import { useControlStore } from "#store/ControlStore";
import { useState } from "react";


const getPositionClass = (lang) =>
  lang === "en" ? "right-0 left-[78%]" : "right-[55%] left-0";


const LanguageSelector = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);
  const options = [
    { id: "ar", label: "العربية" },
    { id: "en", label: "English" },
  ];

  return (
  
    <div className="control-inputs text-left group">
      <button 
        className="control-language-btn "  >
        {language === "ar" ? "العربية" : "English"} 
        <ChevronDown />
      </button>


        <div className="control-choose py-1 hidden group-hover:block">
          {options.map((option) => (
            <button key={option.id} onClick={() => {
              setLanguage(option.id);
              }}
              className="control-check"
            >
              {option.label}
            </button>
          ))}
        </div>

    </div>
  );
};


const ControlCenter = () => {
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
    toggleOpen,
  } = useControlStore();

  if (!isOpen) return null;

  const controlItems = [
    { id: "wifi", label: "Wifi", icon: Wifi, active: wifi, onClick: toggleWifi },
    { id: "bluetooth", label: "Bluetooth", icon: Bluetooth, active: bluetooth, onClick: toggleBluetooth },
    { id: "airDrop", label: "AirDrop", icon: House, active: airDrop, onClick: toggleAirDrop },
  ];

  return (
    <div className="w-full h-full bg-transparent" onClick={() => toggleOpen(false)}>
    <div className={`controlcenter ${getPositionClass(language)}`}>
      <div className="control-top-container">
        <div className="control-left">
          {controlItems.map(({ id, label, icon: Icon, active, onClick }) => (
            <div key={id} className="control-left-icon" onClick={onClick}>
              <Icon className={active ? "text-sky-400" : ""} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="control-mode col-2" onClick={toggleTheme}>
          {theme === "light" ? (
            <Sun className="text-sky-400" />
          ) : (
            <Moon className="text-sky-400" />
          )}
          <span>Mode</span>
        </div>

        <div className="control-right-button col-2">
          <div className="control-right-icon">
            <Keyboard className="m-auto" />
            <span>Keyboard</span>
          </div>
          <div className="control-right-icon">
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

      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
    </div>
  );
};

export default ControlCenter;
