import emailjs from "@emailjs/browser";

export const sendContactEmail = (formElement: HTMLFormElement) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
};
