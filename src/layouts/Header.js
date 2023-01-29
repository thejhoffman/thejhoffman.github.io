import { useContext } from "react";
import { context } from "../context/context";
import Image from "next/legacy/image";

const Header = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");

  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo">
          <a href="#" onClick={() => changeNav("home")}>
            <Image
              src="/img/logo/jh_logo.png"
              alt=""
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Home
              </a>
            </li>
            <li className={activeNav("about")}>
              <a href="#about" onClick={() => changeNav("about")}>
                About
              </a>
            </li>
            <li className={activeNav("portfolio")}>
              <a href="#portfolio" onClick={() => changeNav("portfolio")}>
                Portfolio
              </a>
            </li>
            {/* <li className={activeNav("news")}>
              <a href="#news" onClick={() => changeNav("news")}>
                News
              </a>
            </li> */}
            <li className={activeNav("contact")}>
              <a href="#contact" onClick={() => changeNav("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};
export default Header;
