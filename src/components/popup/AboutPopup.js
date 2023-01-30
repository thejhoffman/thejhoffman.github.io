import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";
import Image from "next/legacy/image";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">

        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <Image
                  src="/img/thumbs/1-1.jpg"
                  alt="profile picture"
                  width={1}
                  height={1}
                  layout="responsive"
                />
                <div className="main" data-img-url="img/about/profile.png" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                {/* <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.birthday}</span>
                  </div>
                </li> */}
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-2" />
                    <span>
                      <a href="https://www.linkedin.com/in/jamesvhoffman/">
                        linkedin.com/in/jamesvhoffman
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-gitlab" />
                    <span>
                      <a href="https://gitlab.com/thejhoffman">
                        gitlab.com/thejhoffman
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="assets/James_Hoffman_Resume.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right_inner">

            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                  I am a fullstack web developer with a strong foundation in languages
                  such as Python, JavaScript, HTML, and CSS. Knowledgeable in Domain-driven
                  design and familiar with frameworks such as Django, FastAPI, React, and
                  Bootstrap. Committed to continuously learning and growing, with a passion
                  for creating user-friendly, scalable web applications. Eager to use my skills
                  and enthusiasm to contribute to a team and deliver high-quality projects.
                </p>
              </div>
            </div>

            <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                {aboutData.skills &&
                  aboutData.skills.programming &&
                  aboutData.skills.programming.map((programming, i) => (
                    <div
                      key={i}
                      className="progress_inner skillsInner___"
                      data-value={95}
                    >
                      <span>
                        <span className="label">{programming.name}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - programming.value}%` }}
                        >
                          {/* {programming.value}% */}
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${programming.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Technical <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData.techSkills &&
                    aboutData.techSkills.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        {service}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Working <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
