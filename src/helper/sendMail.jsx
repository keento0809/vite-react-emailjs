import { init, send } from "emailjs-com";

const sendMail = (info) => {
  const userID = import.meta.env.VITE_USER_ID;
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  if (userID && serviceID && templateID) {
    init(userID);
    const { name, companyName, email, title, message } = info;
    const template_param = {
      title,
      message,
      to_name: name,
      from_email: email,
      company: companyName,
    };
    send(serviceID, templateID, template_param)
      .then(() => {
        window.alert("Mail sent");
      })
      .catch((err) => console.log(err));
  }
};

export default sendMail;
