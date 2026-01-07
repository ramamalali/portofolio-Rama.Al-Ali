import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import { socials } from "#constants";
import { useTranslation } from "react-i18next";

const Contact = () =>{
    const {t} = useTranslation();
    return(
        <>
        <div id="window-header">
        <WindowControlls target="contact" />
        <h2>{t("Contact")}</h2>
        </div>



        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt="Rama" className="w-20 rounded-full "/>
            <h3>{t("Let's connect")}</h3>
            <p>{t("Got an idea? A bug to squash? or just wanna talk tech? I'm in.")}</p>

            <ul>
                {socials.map(({id , bg , link , icon , text}) => (
                    <li key={id} style={{backgroundColor : bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5"/>
                            <p>{t(text)}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
