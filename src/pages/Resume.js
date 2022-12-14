import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import certifications from '../data/resume/certificate';
import { skills, categories } from '../data/resume/skills';
import Certificates from '../components/Resume/Certificates';

const sections = [
  'Education',
  'Experience',
  'Certificates',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="SHANGEETH S.S's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Certificates data={certifications} />
      <Skills skills={skills} categories={categories} />

    </article>
  </Main>
);

export default Resume;
