import { WindowControlls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { ShieldHalf } from "lucide-react";
import { MoveRight } from "lucide-react";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  Share,
  Plus,
  Copy,
} from "lucide-react";
import { PanelLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const Safari = () => {
  const {t} = useTranslation();
  return (
    <>
      <div id="window-header">
        <WindowControlls target="safari" />
        <PanelLeft className=" icon" />

        <div className="flex items-center gap-1">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex items-center gap-5">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder={t("Search or Enter website Name")}
              className="flex-1"
            />
          </div>

          <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
          </div>
        </div>
      </div>

      <div className="blog">
        <h2>{t("My Developer Blog")}</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <h3>{t(title)}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {t("Check out the full post")} <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
