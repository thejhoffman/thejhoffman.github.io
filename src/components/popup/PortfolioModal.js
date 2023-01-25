import Modal from "./Modal";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/legacy/image";
import { useEffect } from "react";
import { dataImage } from "../../utilits";

const PortfolioModal = ({ data, close, open }) => {
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    dataImage();
  }, [data]);

  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <Image
            src="/img/thumbs/4-2.jpg"
            alt=""
            width={800}
            height={400}
          />
          <div className="main" data-img-url={data.mainImage} />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.name}</h3>
          <span>
            <a href={data.detailLink}>{data.detail}</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
            {data.description}
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/7.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="#"
                    onClick={() => setOpenLightBox(true)}
                  />
                  <Lightbox
                    open={openLightBox}
                    close={() => setOpenLightBox(false)}
                    slides={[
                      { src: "img/portfolio/7.jpg" },
                    ]}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/8.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/8.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/9.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/9.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
