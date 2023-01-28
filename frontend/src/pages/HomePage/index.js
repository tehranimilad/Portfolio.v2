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
              <h1 className="crypto-animation">HI, I'M MILAD <br /></h1>
              <Image className="headshot" src="https://ice-us-wdc-117394.icedrive.io/download?p=mzu2iJH8tyxlpadtKAJ1T3N3mBFprEY9fPuAz.rdKr.hdf3EUkwvC08fF89PV6Ti_GkkmD6idSSZlcYkJ.wmGmHreqQHbGHd3v3Fun_gKmI4.WL4gqx7Ke1EvvWXf..8sYhNlaIx6MmjPzY5ix0cIptTDN2_cPcXrRWeINJbO0vm9pfTzXqRRKmtc13tindi7iuaC95I0UaIO9qFWouD6yDuqYYWemAis674Axlqrlk-" />
            <div className="landing-page-container">
                 <div className="crypto-animation" fluid>
                      SOFTWARE <br/>ENGINEER
                  </div>                                               
              </div>
              <div className="projects">
                <p><a className="homeLinks" href="/projects">Projects</a></p>
                <p><a variant className="homeLinks" href="/">Learn More</a></p>
              </div>
            </div>
          </div>
          </>
      )
    }
export default HomePage;
