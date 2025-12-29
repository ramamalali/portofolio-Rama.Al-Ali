import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import { Search } from "lucide-react";
import { photosLinks } from "#constants";
import usePhotosgroupStore from "#store/PhotosLocation";
import clsx from "clsx";
import useWindowStore from "#store/Window";

const Photos = () => {
  const { activePhotosgroup, setActionPhotosgroup } = usePhotosgroupStore();
  const { openWindow } = useWindowStore();


  const openItem = (item) => {

    if (item.fileType === "img") {
      return openWindow("imgfile", item);
    
    }
    console.warn("Unknown file type:", item.fileType, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControlls target="photos" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full w-full">
        <div className="sidebar w-50">
          <h3>Photos</h3>
          <ul>
            {Object.values(photosLinks).map((section) => (
              <li
                key={section.id}
                onClick={() => setActionPhotosgroup(section)}
                className={clsx(
                  section.id === activePhotosgroup?.id ? "active" : "not-active"
                )}
              >
                <img src={section.icon} className="w-4" alt={section.title} />
                <p className="text-sm font-medium truncate">{section.title}</p>
              </li>
         
            ))}
          </ul>
        </div>
         <div className="gallery">
        <ul>
          {activePhotosgroup?.children?.map((item) => (
            <li key={item.id} onClick={() => openItem(item)}>
              <img src={item.imageUrl} alt={`Photo ${item.id}`} />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
