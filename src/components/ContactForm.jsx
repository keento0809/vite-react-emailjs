import React, { useState } from "react";
import sendMail from "../helper/sendMail";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    companyName: "",
    email: "",
    title: "",
    message: "",
  });
  const handleChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSendMail = (e) => {
    e.preventDefault();
    sendMail(info);
    setInfo({
      name: "",
      companyName: "",
      email: "",
      title: "",
      message: "",
    });
  };
  const handleCanceled = () => {
    setInfo({
      name: "",
      companyName: "",
      email: "",
      title: "",
      message: "",
    });
  };
  const { name, mail, title, message } = info;
  const disableSend =
    name === "" || mail === "" || title === "" || message === "";
  console.log(disableSend);
  return (
    <form>
      <div>
        <label htmlFor="nameForm">Name*</label>
      </div>
      <input
        type="text"
        id="nameForm"
        name="name"
        className="formInput"
        onChange={handleChangeInfo}
        required
      />
      <div>
        <label htmlFor="companyNameForm">Company name</label>
      </div>
      <input
        type="text"
        name="companyName"
        id="companyNameForm"
        className="formInput"
        onChange={handleChangeInfo}
        required
      />
      <div>
        <label htmlFor="mailForm">Email*</label>
      </div>
      <input
        type="email"
        name="email"
        id="mailForm"
        className="formInput"
        onChange={handleChangeInfo}
        required
      />
      <div>
        <label htmlFor="mailTitleForm">Title*</label>
      </div>
      <input
        type="text"
        name="title"
        id="mailTitleForm"
        className="formInput"
        onChange={handleChangeInfo}
        required
      />
      <div>
        <label htmlFor="mailContentForm">Message*</label>
      </div>
      <textarea
        type="text"
        name="message"
        id="mailContentForm"
        className="formInput"
        rows="5"
        onChange={handleChangeInfo}
        required
      />
      <div
        className="btns"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <button
            disabled={disableSend}
            onClick={handleSendMail}
            variant="contained"
            color="default"
          >
            <strong>Send</strong>
          </button>
        </div>
        <div>
          <button onClick={handleCanceled} variant="contained" color="default">
            <strong>Cancel</strong>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
