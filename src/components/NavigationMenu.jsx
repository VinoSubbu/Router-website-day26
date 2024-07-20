import React from "react";
import "../assets/styles/style.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const handleAllCourse = () => {
    navigate('/');
  }

  const handleFullStackDevelopment = () => {
    navigate('/full-stack-development');
  }

  const handleDataScience = () => {
    navigate('/data-science');
  }

  const handleCyberSecurity = () => {
    navigate('/cyber-security');
  }

  const handleCareer = () => {
    navigate('/career');
  }


  return (
    <nav className="navbar">
      <div className="heading-div">
        <h1 className="heading">React Router Task</h1>
      </div>
      <div className="navbar-ul">
      <NavLink className="navlink" to="/" exact>All Courses</NavLink>
        <NavLink className="navlink" to="/full-stack-development">Full Stack Development</NavLink>
        <NavLink className="navlink" to="/data-science">Data Science</NavLink>
        <NavLink className="navlink" to="/cyber-security">Cyber Security</NavLink>
        <NavLink className="navlink" to="/career">Career</NavLink>
      </div>
    </nav>
  );
};

export default NavigationMenu;
