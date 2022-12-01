import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact SHANGEETH S.S via email @ shanshangeeth@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can e-mail me at: </p>
        <EmailLink />
        <p>Mobile: </p>
        <a href="call:+91-978-628-7878">+91 97865 87878</a>

      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
