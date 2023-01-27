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
            scale: 0.7})
          .add({
            letterSpacing: "5px"})
          .add({
            scale: .8})
          .add({
            letterSpacing: "8px"});
  }, []);
    
      return (
          <>
          <div className="backgroundImage">
            <div className="headliner">
              <h1 className="crypto-animation">HEY I AM MILAD TEHRANI <br /></h1>
            <div className="landing-page-container">
                 <div className="crypto-animation" fluid>
                      SOFTWARE <br/>ENGINEER
                  </div>                                               
              </div>
              <div className="projects">
                  <p><a href="/">Projects</a></p>
                  <p><a href="/">Learn More</a></p>
              </div>
            </div>
          </div>
          </>
      )
    }
export default HomePage;
