import React from 'react';
import '../assets/styles/style.css'

const NavigationMenu = () => {
  return (
    <nav className='navbar'>
      <div className='heading-div'>
      <h1 className='heading'>React Router Task</h1>
      </div>
      <ul className='navbar-ul'>
        <li>
          <a href="/">All Courses</a>
        </li>
        <li>
          <a href="/full-stack-development">Full Stack Development</a>
        </li>
        <li>
          <a href="/data-science">Data Science</a>
        </li>
        <li>
          <a href="/cyber-security">Cyber Security</a>
        </li>
        <li>
          <a href="/career">Career</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
