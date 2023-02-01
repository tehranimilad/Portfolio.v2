import { useEffect } from "react"
import Letterize from "letterizejs"
import anime from "animejs";
import './HomePage.css'

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
            <h1 className="mainPageTitle"> 
            <span className="font-weight: normal;">Hey I'm </span>
            <span className="spacer"></span>
            <span className="bold"> Milad Tehrani</span>
            <br />
            <br /> I'M A <span className="bold">FULL-STACK ENGINEER</span>
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
