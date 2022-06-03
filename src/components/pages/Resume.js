import React from 'react';
import '../../styles/Resume.css'
import myResume from "../../assets/Resume.pdf"

export default function Resume() {
  return (
    <div>
      <div className='d-flex flex-column resume-container'>
        <h3 className='resume-heading'>Skils</h3>
        <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>CSS</li>
            <li>mySql</li>
            <li>mongoDB</li>
        </ul>
        <a href={myResume} target="blank_" rel='noreferrer' download='James-Harding-Resume'>Download full resume</a>
      </div>
    </div>
  );
}