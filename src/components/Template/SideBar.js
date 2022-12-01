import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>SHANGEETH S.S</h2>
        <p><a href="mailto:shangeeth@gmail.com">shanshangeeth@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shangeeth. I like building things.
        I am a <a href="https://www.kct.ac.in">KCT</a> graduate Seeking an opportunity with an esteemed organization where I can utilize my skills to make life handy and enhance learning in the field of work .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/contact" className="button">Contact Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;  SHANGEETH S.S <Link to="/">Portfolio</Link>.</p>
    </section>
  </section>
);

export default SideBar;
