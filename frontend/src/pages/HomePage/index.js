import { useEffect } from "react"
import Letterize from "letterizejs"
import anime from "animejs";
import './HomePage.css'
import Nav from "../../components/nav";

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
            <Nav />
            <div className="homePageHeadliner">
            <span className="font-weight: normal;">HEY I'M</span>
            <span className="spacer"></span>
            <span className="bold"> MILAD TEHRANI</span>
            <br />
            <br /> I'M A <span className="bold">FULL-STACK ENGINEER</span>                                      
              </div>
              <div className="landing-page-container">
              <div className="crypto-animation" fluid>
              <div className="projects">
                <p><a className="homeLinks" href="/projects">Projects</a></p>
                <p><a className="homeLinks" href="/">Learn More</a></p>
              </div>
            </div>
          </div>
          </>
      )
    }
export default HomePage;
