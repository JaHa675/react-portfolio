import React from 'react';
import '../../styles/About.css'
import myFace from '../../assets/pics/my-face.jpg'

export default function About() {
  return (
    <div className='d-flex flex-column container-sm title'>
      <h1>About Page</h1>
      {/* this will be my face */}
      <img className='my-face' src={myFace}></img>
      <p className='row text-content'>
      Time in customer service positions and a lifetime of dabbling in web development culminating in taking formal classes on the subject to prepare me for a career in full-stack development. A strong team player with an emphasis on continuous improvement, both of myself and of those around me. Delivering solutions to customers that they are happy with is always my priority.
      </p>
    </div>
  );
}