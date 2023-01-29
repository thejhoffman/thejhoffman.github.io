import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import Image from "next/legacy/image";

const projectData = {
  largesseance: {
    name: "Largesseance",
    detail: "gitlab.com/largesseance/project-gamma",
    detailLink: "https://gitlab.com/largesseance/project-gamma",
    description: `Largesseance is the final module project from my time a Hack Reactor.
      *- Developed in a team alongside three of my cohorts mates in which we had the freedom to come up with the design and concept from scratch.
      *- It is a web application built using FastAPI (for the backend), React with Redux (for the frontend), third-party Etsy API (for product information), and Bootstrap (for styling).
      *- The purpose of the project was to provide personalized gift recommendations based on a recipient's preferences and interests.
      *- The team worked collaboratively, utilizing daily stand-up meetings to track progress and resolve any issues.
      *- FastAPI was chosen for its fast performance and ease of use. React Redux allowed for efficient state management, and the third-party Etsy API provided a vast amount of product information. Bootstrap facilitated quick styling and responsive design.
      *- Overall, the team found the project to be challenging but rewarding, as we were able to apply our technical skills and work together effectively to deliver a functional and user-friendly product.`,
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
    description: `CarCar is the second module project from my time a Hack Reactor.
    *- Developed in a two person team alongside one of my other cohorts mates in which we had create a web app to manage an automobile dealership.
    *- The project aimed to track inventory, sales, and services provided by the dealership.
    *- It utilized modern technologies such as React for front-end development, Django for the back-end, and Bootstrap for styling.
    *- The project's architecture was built with microservices in mind, and a poller was used to facilitate communication between the different microservices.
    *- Restful APIs were also utilized to allow for seamless communication between the front-end and back-end.`,
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
    description: `Tracker is the first module project from my time a Hack Reactor.
      *- Developed as a solo project that aimed to develop a web-based application for individuals or teams to track their tasks and projects efficiently.
      *- The project was developed using the Django framework, which was utilized not only for building the backend and handling the database but also for rendering the HTML frontend.
      *- The frontend was styled using native CSS, which was used to create a responsive and user-friendly interface.`,
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

                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          src="/img/thumbs/1-1.jpg"
                          alt={projectData.largesseance.mainImageAlt}
                          width={1}
                          height={1}
                          layout="responsive"
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
                          width={1}
                          height={1}
                          layout="responsive"
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
                          width={1}
                          height={1}
                          layout="responsive"
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
