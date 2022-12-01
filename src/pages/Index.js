import React from 'react';
import { Link } from 'react-router-dom';
import MERN from '../components/Contact/MERN';

import Main from '../layouts/Main';

const today = new Date();
const curHr = today.getHours();
let wishing;

if (curHr < 12) {
  wishing = 'Good Morning';
} else if (curHr < 18) {
  wishing = 'Good Afternoon';
} else {
  wishing = 'Good Evening';
}

const Index = () => (
  <Main
    description={"SHANGEETH S.S's personal website. Coimbatore based KCT graduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <h3 data-testid="heading"><Link to="/"><MERN /></Link></h3>
          <p>
            {'      '}I am Shangeeth and I build websites using <b>M</b>ongo DB ,<b>E</b>xpress JS ,
            <b>R</b>eact JS and <b>N</b>ode JS.
            This kinda of developing a Website is known as MERN Stack Development.
          </p>
          <p>
            By the way {wishing} !
          </p>
        </div>
      </header>
      <p> Welcome to my website. You can check out my  {'  '}
        <Link to="/resume">Resume</Link> , {'   '}
        <Link to="/projects">Projects</Link> , {'   '}
        or <Link to="/contact">Contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
