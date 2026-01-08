import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/Location";
import clsx from "clsx";
import useWindowStore from "#store/Window";
import { useTranslation } from "react-i18next";

const Finder = () => {
  const {t} = useTranslation();
  const { activeLocation, setActionLocation } = useLocationStore();
  const { openWindow } = useWindowStore();


const openItem = (item) => {
  // إذا الملف PDF → افتح نافذة الـ Resume
  if (item.fileType === "pdf") {
    return openWindow("resume");
  }

  // إذا كان مجلد → غيّر الـ activeLocation
  if (item.kind === "folder") {
    return setActionLocation(item);
  }

  // إذا كان رابط خارجي (fig أو url) → افتح في نافذة جديدة
  if (["fig", "url"].includes(item.fileType) && item.href) {
    return window.open(item.href, "_blank");
  }

  // إذا كان ملف نصي → افتح نافذة txtfile
  if (item.fileType === "txt") {
    return openWindow("txtfile", item);
  }

  // إذا كان ملف صورة → افتح نافذة imgfile
  if (item.fileType === "img") {
    return openWindow("imgfile", item);
  }

  // fallback: إذا ما تطابق أي شرط
  console.warn("Unknown file type:", item.fileType, item);
};




  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActionLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : " not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{t(item.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControlls target="finder" />
        <Search className="icon" />
      </div>

      <div className=" flex h-full">
        <div className="sidebar">
          {renderList(t("Favorites"), Object.values(locations))}
          {renderList(t("My Projects"), locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{t(item.name)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
