import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
    return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">Frontend developer, I create web pages with UI/UX user interface, I have 3 years experience studying software part at SMK 1 bangkinang</p>
            </div>
        </div>
    </section>
    )
}
export default About ;