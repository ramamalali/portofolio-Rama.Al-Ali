
import { useControlStore } from '#store/ControlStore';

const ControlCenter = ()  => {
  const {
    wifi,
    bluetooth,
    volume,
    brightness,
    language,
    theme,
    toggleWifi,
    toggleBluetooth,
    setVolume,
    setBrightness,
    toggleLanguage,
    toggleTheme,
    isOpen,
  } = useControlStore();

  if (!isOpen) return null; 

  return (
    <div className={`absolute top-12 right-4 p-4 rounded-xl shadow-lg bg-gray-800 text-white ${theme}`}>
      <h3 className="font-bold mb-2">Control Center</h3>

      <div className="flex items-center justify-between mb-2">
        <span>Wi-Fi</span>
        <input type="checkbox" checked={wifi} onChange={toggleWifi} />
      </div>

      <div className="flex items-center justify-between mb-2">
        <span>Bluetooth</span>
        <input type="checkbox" checked={bluetooth} onChange={toggleBluetooth} />
      </div>

      <div className="mb-2">
        <label>Volume</label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </div>

      <div className="mb-2">
        <label>Brightness</label>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
      </div>

      <div className="flex justify-between mb-2">
        <span>Language</span>
        <button onClick={toggleLanguage}>
          {language === 'Ar' ? 'العربية' : 'English'}
        </button>
      </div>

      <div className="flex justify-between">
        <span>Theme</span>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? 'Dark 🌙' : 'Light ☀️'}
        </button>
      </div>
    </div>
  );
}


export default ControlCenter;