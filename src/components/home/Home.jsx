import Login from "../Login/Login";
// import Navbar from "../Navbar/Navbar";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="home" style={{color:'#FCFAE8;'}}>
      <div className="row gap-2 p-5">
        <div className="col-7 mt-5">
          <section>
            
            <p className="textClass">
            <div className="heading">
            <span style={
              {fontSize: '3.75rem'}
            }>Track, Trade,</span> 
            <span style={{fontSize: '4.4375rem'}}>Triumph.</span>
            <span style={{fontSize:'1.8rem',fontWeight:'300',lineHeight:'171.4%'}}>
              <em>

              Elevate Your Investments Seamlessly
              </em>
            </span>
            </div>
        
        
            
            <div className="TextPara">
            <p>
            Welcome to our cutting-edge app designed to empower you in the
            world of finance! Seamlessly <span className="text-primary" >track, manage, and optimize</span>  your bond
            and securities portfolio with our intuitive platform.
            </p><br />
            <p>
            With our user-friendly interface and robust features, taking control
            of your financial future has never been easier. Join us today and
            unlock a new level of precision in tracking, managing, and
            maximizing your investment opportunities.
            </p>
            </div>
          

            </p>
          </section>
        </div>
        <div className="col">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
