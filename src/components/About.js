import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";
import Image from "next/legacy/image";

const aboutData = {
  firstName: "James",
  lastName: "Hoffman",
  birthday: "01.01.1990",
  address: "Lewistown, PA",
  phn: "717 953 2926",
  email: "jamesvhoffman@outlook.com",
  techSkills: [
    "FastAPI",
    "Django",
    "REST APIs",
    "PostgreSQL",
    "JSON",
  ],
  skills: {
    programming: [
      { name: "Python 3", value: "95" },
      { name: "JavaScript ES6", value: "90" },
      { name: "HTML 5", value: "90" },
      { name: "CSS", value: "85" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Russian", value: "80" },
      { name: "Arabic", value: "90" },
    ],
  },
  working: [
    // { year: "2017-", company: "Current", deg: "Current" },
    { year: "2021 - 2022", company: "Penn State Health", deg: "Support Specialist" },
    { year: "2019 - 2021", company: "TEKsystems", deg: "PC Technician" },
    { year: "2017 - 2019", company: "ISS Solutions", deg: "PC Service Technician" },
    { year: "2015 - 2017", company: "Geisinger", deg: "Workstation Analyst" },
    { year: "2014 - 2015", company: "Lewistown Hospital", deg: "Interim Staff - IT Support" },
    { year: "2013", company: "Curwensville Area School District", deg: "Intern" },
    { year: "2009 - 2014", company: "Lewistown Hospital", deg: "Dietary Aide" },
  ],
  education: [
    { year: "2022", unv: "Hack Reactor", degree: "Software Engineering Bootcamp" },
    { year: "2011 - 2013", unv: "South Hills School of Business & Technology", degree: "Associate Degree" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <Image
                  src="/img/thumbs/1-1.jpg"
                  alt="profile picture"
                  width={1}
                  height={1}
                  layout="responsive"
                />
                <div className="main" data-img-url="img/about/profile.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>James Hoffman</span>. I am fullstack web developer with a passion
                  for creating innovative solutions and a drive to constantly learn and grow in
                  the field. Seeking opportunities to bring fresh ideas and a strong work ethic to
                  any project.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
