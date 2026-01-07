import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants/index.js";
import useWindowStore from "#store/Window.jsx";
import {useControlStore} from "#store/ControlStore";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {t} = useTranslation();
  const { openWindow  } = useWindowStore();
  const { toggleOpen , wifi  } = useControlStore();
  return (
    <>
      <nav >
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <p className="font-bold">{t("Rama's Portfolio")}</p>

          <ul>
            {navLinks.map(({ id, nameKey , type }) => (
              <li key={id} className="cursor-pointer" onClick={() => openWindow(type)} >
                {t(nameKey)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({ id, icon : Icon , type }) => (
              <li key={id} className="cursor-pointer" onClick={() => {
                if (type === "mode") {
                  toggleOpen();
                } else {
                  console.log(`Icon ${type} clicked`);
                }
              }} >
              <Icon 
      className={
        type === "wifi" && wifi === true
          ? "icon-hover text-sky-400"
          : "icon-hover"}
          
        />
              </li>
            ))}
          </ul>
          <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
