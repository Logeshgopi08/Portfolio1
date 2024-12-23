import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import useAlert from "../hooks/useAlert";
import Alert from "../Components/Alert";

const Contact = () => {

    //service_z1ipkyu
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
      };

      const handleSubmit =(e)=>{
        e.preventDefault();
        setLoading(true);

try {
    emailjs.send(
        "service_z1ipkyu",
        "template_mycsyde",
        {
            from_name: form.name,
            to_name: 'LogeshGopi',
            from_email: form.email,
            to_email: 'logeshgopi.madasamy@gmail.com',
            message: form.message,
          },
         "ubMO94DXR6cE0YUQK"
    ).then(()=>{
        setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
    })
} catch (error) {
    setLoading(false);
    console.error(error);

    showAlert({
      show: true,
      text: "I didn't receive your message 😢",
      type: 'danger',
    });
}

       
      }
  return (
    <section className="c-space my-20" id="contact">
        {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} className="mt-12 flex flex-col space-y-7" onSubmit={handleSubmit}>
          <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
