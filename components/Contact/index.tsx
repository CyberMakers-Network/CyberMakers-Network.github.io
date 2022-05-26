import { contact } from '../../utility/data';

const Contact = () => {
  if (!contact.whatsapp) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact us</h2>
      <a href={`${contact.whatsapp}`}>
        <span className="btn btn--outline">Whatsapp group</span>
      </a>
    </section>
  );
};

export default Contact;
