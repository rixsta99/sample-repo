import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="main-wrapper">
      <div className="content-container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />
        </div>
        <div className="text">
          <p>
            Aspen Tree provides custom IT solutions for businesses in Australia. Areas of expertise include:
          </p>
          <ul>
            <li><b>Cloud Technology.</b> AWS Cloud & Azure Cloud</li>
            <li><b>CI/CD & Automation.</b> AWS Cloud Formation, GitHub Actions/Packages/APIs, Python, AWS CDK, Terraform, Ansible, Jenkins</li>
            <li><b>Full stack web development.</b> Node.js, Python, React, MongoDB & Node Express</li>
            <li><b>Backend integration & API Management.</b> Open source and proprietary platforms with REST APIs, Kafka, SpringBoot</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        &copy; 2014-{year}, Aspen Tree
      </div>
    </div>
  );
};

export default HomePage;
