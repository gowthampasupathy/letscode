import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./landing.css";
import lancov from "./landcov.png";
import Landingcom from "./landingcom";
import ControlledCarousel from "./landcarosel";
import { useNavigate } from "react-router-dom";
import clogo from "./clogo.png"
import jlogo from "./jlogo.jpg"
import cpplogo from "./cpplogo.png"
import pylogo from "./pylogo.png"
import scrool from "./scrool1.png"
import scrool1 from "./scrool2.png"
import scrool2 from "./scrool3.png"
const Landingbody = () => {
    const navigator = useNavigate();
  return (
    <div>
      <div className="last11"  >
      <Row className="ro" >
      <Col xs={12} md={6}>
        <div data-aos="fade-right" data-aos-duration="1000">
       
          <img src={lancov} className="img"></img>
        
        </div>
        </Col>
        <Col xs={12} md={6}>
        <div data-aos="fade-left" data-aos-duration="1000" >
          <div className="frst">
            <p>
              <h1 className="txt1">
                Welcome To <br></br> Lets Code !!
              </h1>
              <h2 className="txt2">Empower Your Code Journey</h2>
              <p>
                Are you ready to embark on a coding adventure that transforms
                your skills <br></br>
                into success. Welcome to Lets Code, the ultimate online platform
                <br></br>
                designed to elevate your programming proficiency <br></br>
                and foster a community of passionate learners.
              </p>
              <button class="button"  onClick={() => navigator("/Signup")} ></button>
            </p>
          </div>
        </div></Col>
      </Row>
      </div>
      <div className="sec" data-aos="fade-up"data-aos-duration="1000"
     data-aos-anchor-placement="center-bottom" >
        <p >
          <h1 className="txt" >What is Lets Code ?</h1>
          <p className="con">
            Lets Code is an online coding platform designed to enhance the
            problem-solving skills of programmers, with a primary focus on skill
            development for students. The platform features a diverse range of
            programming problems categorized by difficulty levels and topics.
            Users can access a general-purpose compiler to execute and test
            their code. The platform includes a secure authentication system,
            personalized dashboards, and a comprehensive problem repository. It
            also offers a collaborative environment through discussion forums,
            leaderboards, and achievements. Lets Code aims to provide a robust
            and educational experience for users, fostering a community of
            learners in the realm of programming.
          </p>
        </p>
      </div>
      <div  >
      <Landingcom />
      </div>
      <div style={{height:"200px"}}>
        <h1 style={{textAlign:'center',marginTop:50}}>Available Languages</h1>
        {/* <ControlledCarousel/> */}
        <marquee SCROLLAMOUNT={20}>
          <img className="mg"  src={scrool}></img>
          <img className="mg"  src={scrool1}></img>
          <img className="mg"  src={scrool2}></img>
        </marquee>
      </div>
      <div className="last">
        <footer>&copy;2024 CopyRight letscode.com</footer>
      </div>
    </div>
  );
};

export default Landingbody;
