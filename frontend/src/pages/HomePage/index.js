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
            scale: 0.7})
          .add({
            letterSpacing: "3px"})
          .add({
            scale: 1})
          .add({
            letterSpacing: "5px"});
  }, []);
    
      return (
          <>
            <Nav />
            <div className="homePageHeadliner">
            <span className="font-weight: normal;">HEY I'M</span>
            <span className="spacer"></span>
            <span className="bold"> MILAD TEHRANI</span>

            <br /> I'M A <span className="bold">SOFTWARE ENGINEER</span>                                      
              </div>
              <div className="landing-page-container">
              <div className="crypto-animation" fluid>
              <div className="projects">
                <p><a className="homeLinks" href="/projects">PROJECTS</a></p>
                <p><a className="homeLinks" href="/learnmore">ABOUT ME</a></p>
              </div>
            </div>
          </div>
          </>
      )
    }
export default HomePage;
