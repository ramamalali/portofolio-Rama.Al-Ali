import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants/index.js";
import useWindowStore from "#store/Window.jsx";
import {useControlStore} from "#store/ControlStore";

const Navbar = () => {
  const { openWindow  } = useWindowStore();
  const { toggleOpen  } = useControlStore();
  return (
    <>
      <nav>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <p className="font-bold">Rama's Portfolio</p>

          <ul>
            {navLinks.map(({ id, name , type }) => (
              <li key={id} onClick={() => openWindow(type)} >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({ id, img  }) => (
              <li key={id} className="cursor-pointer" onClick={() => {
                if (type === "mode") {
                  toggleOpen();
                } else {
                  console.log(`Icon ${type} clicked`);
                }
              }} >
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
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
