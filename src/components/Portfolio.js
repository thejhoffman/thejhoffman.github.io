import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import Image from "next/image";

const projectData = {
  largesseance: {
    name: "Largesseance",
    detail: "gitlab.com/largesseance/project-gamma",
    detailLink: "https://gitlab.com/largesseance/project-gamma",
    description: "This is the description for Largesseance",
    mainImage: "/img/portfolio/largesseance/main.png",
    mainImageAlt: "Largesseance project picture",
    images: [
      "/img/portfolio/largesseance/home.png",
      "/img/portfolio/largesseance/calendar.png",
      "/img/portfolio/largesseance/dashboard.jpg",
      "/img/portfolio/largesseance/event-form.png",
      "/img/portfolio/largesseance/person-form.png",
    ],
  },
  carcar: {
    name: "CarCar",
    detail: "gitlab.com/thejhoffman/project-beta",
    detailLink: "https://gitlab.com/thejhoffman/project-beta",
    description: "This is the description for CarCar",
    mainImage: "/img/portfolio/carcar/main.png",
    mainImageAlt: "CarCar project picture",
    images: [
      "/img/portfolio/carcar/dropdown-inventory.png",
      "/img/portfolio/carcar/dropdown-sales.png",
      "/img/portfolio/carcar/dropdown-service.png",
      "/img/portfolio/carcar/form-appointment.png",
      "/img/portfolio/carcar/form-automobile.png",
      "/img/portfolio/carcar/form-customer.png",
      "/img/portfolio/carcar/form-manufacturer.png",
      "/img/portfolio/carcar/form-sales-record.png",
      "/img/portfolio/carcar/form-sales.png",
      "/img/portfolio/carcar/form-technician.png",
      "/img/portfolio/carcar/form-vehicle.png",
      "/img/portfolio/carcar/list-appointments.png",
      "/img/portfolio/carcar/list-automobiles.png",
      "/img/portfolio/carcar/list-manufacturers.png",
      "/img/portfolio/carcar/list-sales-history.png",
      "/img/portfolio/carcar/list-sales-records.png",
      "/img/portfolio/carcar/list-service-history.png",
      "/img/portfolio/carcar/list-vehicles.png",
    ],
  },
  tracker: {
    name: "Tracker",
    detail: "gitlab.com/thejhoffman/project-alpha-aug",
    detailLink: "https://gitlab.com/thejhoffman/project-alpha-aug/-/tree/pretty",
    description: "This is the description for Tracker",
    mainImage: "/img/portfolio/tracker/main.png",
    mainImageAlt: "Tracker project picture",
    images: [
      "/img/portfolio/tracker/projectslist-withsidebar.png",
      "/img/portfolio/tracker/projectview-mobile.png",
      "/img/portfolio/tracker/projectview.png",
      "/img/portfolio/tracker/signup-mobile.png",
      "/img/portfolio/tracker/signup.png",
      "/img/portfolio/tracker/tasklist-mobile.png",
      "/img/portfolio/tracker/tasklist.png",
    ],
  }
};

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    detail: "",
    detailLink: "",
    description: "",
    mainImage: "",
    mainImageAlt: "",
    images: []
  });

  return (
    <Fragment>
      <PortfolioModal data={modalData} open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Project <span className="coloring">Portfolio</span>
              </h3>
            </div>

            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/1.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Fruit</h3>
                        <span>Vimeo</span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-vimeo"
                        href="//player.vimeo.com/video/337293658?autoplay=1"
                      />
                    </div>
                  </SwiperSlide> */}

                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/2.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Good Present</h3>
                        <span>Youtube</span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-youtube"
                        href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                      />
                    </div>
                  </SwiperSlide> */}

                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Mockup Cream</h3>
                        <span>Soundcloud</span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      />
                    </div>
                  </SwiperSlide> */}

                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/4.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Delicious Apple</h3>
                        <span>Detail</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide> */}

                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Blue Lemon</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/5.jpg"
                      />
                    </div>
                  </SwiperSlide> */}

                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/6.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Cheery</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/6.jpg"
                      />
                    </div>
                  </SwiperSlide> */}

                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          src="/img/thumbs/1-1.jpg"
                          alt={projectData.largesseance.mainImageAlt}
                          width={390}
                          height={390}
                        />
                        <div
                          className="main"
                          data-img-url={projectData.largesseance.mainImage}
                        />
                      </div>
                      <div className="details">
                        <h3>{projectData.largesseance.name}</h3>
                        <span>{projectData.largesseance.detail}</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => {
                          setModal(true);
                          setModalData(projectData.largesseance);
                        }}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          src="/img/thumbs/1-1.jpg"
                          alt={projectData.carcar.mainImageAlt}
                          width={390}
                          height={390}
                        />
                        <div
                          className="main"
                          data-img-url={projectData.carcar.mainImage}
                        />
                      </div>
                      <div className="details">
                        <h3>{projectData.carcar.name}</h3>
                        <span>{projectData.carcar.detail}</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => {
                          setModal(true);
                          setModalData(projectData.carcar);
                        }}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          src="/img/thumbs/1-1.jpg"
                          alt={projectData.tracker.mainImageAlt}
                          width={390}
                          height={390}
                        />
                        <div
                          className="main"
                          data-img-url={projectData.tracker.mainImage}
                        />
                      </div>
                      <div className="details">
                        <h3>{projectData.tracker.name}</h3>
                        <span>{projectData.tracker.detail}</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => {
                          setModal(true);
                          setModalData(projectData.tracker);
                        }}
                      />
                    </div>
                  </SwiperSlide>

                </div>

                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
export default Portfolio;
