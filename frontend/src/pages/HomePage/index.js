import { useEffect } from "react"
import Letterize from "letterizejs"
import anime from "animejs";
import './HomePage.css'
import Nav from "../../components/nav";

const HomePage = () => {
    useEffect(() => {
      // const mainAnimation = new Letterize({
      //     targets: ".crypto-animation"
      // });
      // const animation = anime.timeline({
      //     targets: mainAnimation.listAll,
      //     delay: anime.stagger(100, {
      //       grid: [mainAnimation.list[0].length, mainAnimation.list.length],
      //       from: "center"
      //     }),
      //     loop: true
      // });
      // animation
      //     .add({
      //       scale: 0.7})
      //     .add({
      //       letterSpacing: "3px"})
      //     .add({
      //       scale: 1})
      //     .add({
      //       letterSpacing: "5px"});
  }, []);
    
      return (
          <>
            <Nav />
            <div>
            <h1 className="noBold">Hey I'm <span className="nameBold">Milad Tehrani</span></h1>
            <h1 className="noBold">I'm A <span className="nameBold">Software Engineer</span></h1>
            </div> 
            
            <div className="skillSet">
            <a className="skillLink">
              <span className="skillText">JavaScript</span>
              <img className="skillImg" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="JS" />
            </a>
            <a className="skillLink">
              <span className="skillText">HTML</span>
              <img className="skillImg2" src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML" />
            </a>
            <a className="skillLink">
              <span className="skillText">CSS</span>
              <img className="skillImg3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" />
            </a>
            <a className="skillLink">
              <span className="skillText">React</span>
              <img className="skillImg2" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
            </a>
            <a className="skillLink">
              <span className="skillText">Python</span>
              <img className="skillImg2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
            </a>
            <a>Javascript, React, Python, MongoDB, Node.js, Express, SQL, HTML, CSS, Bootstrap</a>
            </div>
              {/* <div className="landing-page-container">
              <div className="crypto-animation" fluid>
              <div className="projects">
                <p><a className="homeLinks" href="/projects">PROJECTS</a></p>
                <p><a className="homeLinks" href="/learnmore">ABOUT ME</a></p>
              </div>
            </div>
          </div> */}
          </>
      )
    }
export default HomePage;
