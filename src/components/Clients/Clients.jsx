import goosh from "../../assets/clients/4-goosh.png";
import acavent from "../../assets/clients/acavent.png";
import alzahra from "../../assets/clients/alzahra-vfx.png";
import below from "../../assets/clients/Below.png";
import dara from "../../assets/clients/dara-card.png";
import dina from "../../assets/clients/Dina-group.png";
import fardaBank from "../../assets/clients/Farda-Bank.png";
import farda from "../../assets/clients/Farda.png";
import gerehGallery from "../../assets/clients/gereg-gallery.png";
import hayat from "../../assets/clients/hayat.png";
import iconic from "../../assets/clients/iconic.png";
import jute from "../../assets/clients/jute-cosmetics.png";
import khaneModern from "../../assets/clients/khane-modern.png";
import proudpen from "../../assets/clients/proudpen.png";
import pulseDesign from "../../assets/clients/pulse-design.png";
import radman from "../../assets/clients/radman.png";
import salamatNews from "../../assets/clients/salamat-news.png";
import shirazMall from "../../assets/clients/shiraz-mall.png";
import worldFle from "../../assets/clients/world-fle.png";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";

const Clients = () => {
    return (
        <div className="container">
            <div>
                <SectionHeading
                    title="BELIVE ME"
                    subTitle="CLIENTS AND COMPANIES"
                />
            </div>

            <div className="grid grid-cols-3 gap-5 md:grid-cols-6 items-center opacity-80">
                <img src={fardaBank} alt="Farda Bank Iranian" />
                <img src={farda} alt="Farda" />
                <img src={acavent} alt="Acavent" />
                <img src={dara} alt="Dara Credit" />
                <img src={proudpen} alt="Proud Pen company" />
                <img src={worldFle} alt="World FLE" />
                <img src={iconic} alt="Iconic advertisment corporation" />
                <img src={hayat} alt="Hayat Mall" />
                <img src={khaneModern} alt="Khane Modern" />
                <img src={jute} alt="Jute Cosmetics ecommerce" />
                <img src={gerehGallery} alt="Handi craft product ecommerce" />
                <img src={goosh} alt="4 goosh scarf ecommerce" />
                <img
                    src={pulseDesign}
                    alt="Pulse Design advertisment corporation"
                />
                <img src={shirazMall} alt="Shiraz Mall store" />
                <img src={below} alt="suger free products ecommerce" />
                <img src={dina} alt="Design and equipment retail stores" />
                <img src={radman} alt="Internation Conferences corporation" />
                <img src={salamatNews} alt="Online News website for health" />
            </div>
        </div>
    );
};

export default Clients;
