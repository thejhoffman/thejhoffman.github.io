import Modal from "./Modal";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/legacy/image";
import { useEffect } from "react";
import { dataImage } from "../../utilits";

const ImageWithLightbox = ({ image, index, imagesList }) => {
  const StartImagesSlice = imagesList.slice(index);
  const EndImagesSlice = imagesList.slice(0, index - imagesList.length);
  const LightboxImages = StartImagesSlice.concat(EndImagesSlice);
  LightboxImages.forEach((element, index) => {
    LightboxImages[index] = { src: element };
  });

  const [openLightBox, setOpenLightBox] = useState(false);

  return (
    <li>
      <div className="list_inner">
        <div className="image">
          <Image
            src="/img/thumbs/4-2.jpg"
            alt=""
            width={4}
            height={2}
            layout="responsive"
          />
          <div className="main" data-img-url={image} />
          <a
            className="edrea_tm_full_link zoom"
            href="#"
            onClick={() => setOpenLightBox(true)}
          />
          <Lightbox
            open={openLightBox}
            close={() => setOpenLightBox(false)}
            slides={LightboxImages}
          />
        </div>
      </div>
    </li>
  );
};

const PortfolioModal = ({ data, close, open }) => {
  const [descLines, setDescLines] = useState([]);

  useEffect(() => {
    setDescLines(data.description.split('*'));
  }, [data.description]);

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
            width={4}
            height={2}
            layout="responsive"
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
          {descLines.map((line, index) => {
            return (
              <p key={index}>
                {line}
              </p>
            );
          })}
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            {data.images.map((image, index) => (
              <ImageWithLightbox
                key={image}
                image={image}
                index={index}
                imagesList={data.images}
              />
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
