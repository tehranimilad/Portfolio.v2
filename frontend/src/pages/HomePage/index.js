import { useEffect } from "react"
import Letterize from "letterizejs"
import anime from "animejs";
import './HomePage.css'
import Image from 'react-bootstrap/Image'

const HomePage = () => {
    useEffect(() => {
      const mainAnimation = new Letterize({
          targets: ".crypto-animation"
      });
      const animation = anime.timeline({
          targets: mainAnimation.listAll,
          delay: anime.stagger(100, {
            grid: [mainAnimation.list[0].length, mainAnimation.list.length],
            from: "center"
          }),
          loop: true
      });
      animation
          .add({
            scale: 0.8})
          .add({
            letterSpacing: "6px"})
          .add({
            scale: .9})
          .add({
            letterSpacing: "7px"});
  }, []);
    
      return (
          <>
          <div className="backgroundImage">
            <div className="headliner">
              <h1 className="mainPageTitle"> Hi I AM MILAD TEHRANI. <br/> I'M A FULL-STACK ENGINEER <br /> WITH A BACKGROUND IN MANAGEMENT <br /> INFORMATION SYSTEMS
              </h1>                                          
              </div>
              <div className="landing-page-container">
              <div className="crypto-animation" fluid>
              <div className="projects">
                <p><a className="homeLinks" href="/projects">Projects</a></p>
                <p><a variant className="homeLinks" href="/">Learn More</a></p>
              </div>
            </div>
          </div>
          </div>
          </>
      )
    }
export default HomePage;
