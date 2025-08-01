import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ContactForm.css'

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
          Swal.fire({
                icon: "success",
                title: "¡Tu mensaje fue enviado con exito!",
                showConfirmButton: false,
                timer: 1500,
                theme: 'dark',
                color: '#fff',
                background: '#020202'
          });
        form.current.reset();
      })
      .catch((error) => {
            Swal.fire({
                title: error,
                text: error.text,
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                theme: 'dark'
            });
        });
    };

  return (
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <input placeholder='Nombre' type="text" name="name" required />

        <input placeholder='Email' type="email" name="email" required />

        <textarea placeholder='Mensaje' name="message" required />

        <button type="submit">ENVIAR</button>
      </form>
  );
}

export default ContactForm;