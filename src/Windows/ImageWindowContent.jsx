import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControlls} from "#components";
import useWindowStore from "#store/Window.jsx";

const ImageWindowContent = () =>{
    const {windows} = useWindowStore();
    const data = windows.imgfile?.data;

    if(!data) return null;

    const {name , imageUrl} = data;
    return (
        <>
   <div id="window-header">
    <WindowControlls  target="imgfile"/>
    <h2>{name}</h2>
   </div>

   <div className="p-5 bg-white">
    {imageUrl ? (
        <div className="w-full">
            <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-content rounded "/>
        </div>
    ): null}

    </div>
        </>
    )
}


const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;