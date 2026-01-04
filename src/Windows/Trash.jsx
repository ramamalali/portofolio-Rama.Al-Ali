import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import useWindowStore from "#store/Window";
import useLocationStore from "#store/Location";
import { locations } from "#constants";

const Trash = () => {
   const { activeLocation, setActionLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item) => {
   if (item.fileType === "pdf") {
     return openWindow("resume");
   }
 
   if (item.kind === "folder") {
     return setActionLocation(item);
   }
 
   if (["fig", "url"].includes(item.fileType) && item.href) {
     return window.open(item.href, "_blank");
   }
 
   if (item.fileType === "txt") {
     return openWindow("txtfile", item);
   }
 
   if (item.fileType === "img") {
     return openWindow("imgfile", item);
   }
 
   console.warn("Unknown file type:", item.fileType, item);
 };
 
 

  return (
    <>
      <div id="window-header">
        <WindowControlls target="trash" />
        <h2>Trash</h2>
      </div>

      <ul className=" flex p-10 space-y-10  ">
        {locations.trash.children.map((item) => (
          <li
            key={item.id}
            onClick={() => openItem(item)}
            className="  cursor-pointer hover:bg-gray-100 p-5 "
          >
            <img src={item.icon} className="w-12 mx-auto" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;
