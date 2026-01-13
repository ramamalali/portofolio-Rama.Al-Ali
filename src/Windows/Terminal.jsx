import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import { WindowControlls } from "#components";
import { useTranslation } from "react-i18next";

const Terminal = () => {
  const {t} = useTranslation();
  return (
    <>
      <div id="window-header">
       < WindowControlls target="terminal"/>
        <h2>{t("tech stack")}</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-blod">{t("Rama %")}</span> {t("show tech stack")}
        </p>

        <div className="label">
          <p className="w-32">{t("Category")}</p>
          <p>{t("Technologies")}</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{t(category)}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < item.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> {t("5 of 5 stacks loaded successfully (100%)")}
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" /> {t("Render time : 6ms")}
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
