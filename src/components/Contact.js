import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const { user_name, user_email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    if (user_name.length === 0 || user_email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_cetipvl", // service id
          "template_joz8wfh", // template id
          mailData,
          "I5lDy2ib9qczWOxyS" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ user_name: "", user_email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <i className="icon-linkedin-circled-1" />
              <i className="icon-linkedin" />
              <i className="icon-linkedin-3" />
              <i className="icon-linkedin-squared" />
              <i className="icon-linkedin-2" />
              <i className="icon-linkedin-rect" />
              <i className="icon-linkedin-circled-2" />
              <i className="icon-linkedin-4" />
              <i className="icon-linkedin-1" />
              {/* Testing icons during deploy */}
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-circled-1" />
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
                      <a href="mailto:jamesvhoffman@outlook.com">
                        jamesvhoffman@outlook.com
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">717 953 2926</a>
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

            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  // ref={form}
                  onSubmit={sendEmail}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            onChange={(e) => onChange(e)}
                            value={user_name}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="email"
                            name="user_email"
                            onChange={(e) => onChange(e)}
                            value={user_email}
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <input className="a" type="submit" value="Submit Message" />
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
