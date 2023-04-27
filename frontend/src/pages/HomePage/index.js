import { useEffect } from "react"
import Letterize from "letterizejs"
import anime from "animejs";
import './HomePage.css'
import Nav from "../../components/nav";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import headshot from './assets/headshot.png';

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
            {/* <div>
            <h1 className="noBold">Hey I'm <span className="nameBold">Milad Tehrani</span></h1>
            <h1 className="noBold">I'm A <span className="nameBold">Software Engineer</span></h1>
            </div> */}
            <div>
           
                <Container className="learnMoreInfo">
                  
                    <Card className="text-center">
                    <div>
            <h1 className="noBold">Hey I'm <span className="nameBold">Milad Tehrani</span></h1>
            <h1 className="noBold">I'm A <span className="nameBold">Software Engineer</span></h1>
            </div>
                    <Image className="avatar" src={headshot} fluid></Image>
                    <Card.Body>
                        {/* <Card.Title className="projectTitle">
                            Milad Tehrani
                        </Card.Title> */}
                        <Card.Text className="projectDesc">
                        I'm a highly skilled software engineer with a background in management information systems who is committed to providing cutting-edge solutions that enhance operational efficiency and provide outcomes. I have a passion for technology and use my knowledge to solve challenging issues and assist organizations in achieving their objectives.
                        </Card.Text>
                        <Card.Title className="projectTitle">Skills</Card.Title>
                        <Card.Text className="projectDesc">
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
            <a className="skillLink">
              <span className="skillText">MongoDB</span>
              <img className="skillImg2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/2048px-Antu_mongodb.svg.png" alt="MongoDb" />
            </a>
            <a className="skillLink">
              <span className="skillText">Node.js</span>
              <img className="skillImg4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Nodejs" />
            </a>
            <a className="skillLink">
              <span className="skillText">Express.js</span>
              <img className="skillImg4" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express" />
            </a>
            <a className="skillLink">
              <span className="skillText">SQL</span>
              <img className="skillImg3" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" />
            </a>
            <a className="skillLink">
              <span className="skillText">Bootstrap</span>
              <img className="skillImg4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap" />
            </a>
          

        
            </div>
                        </Card.Text>
                
        
                    </Card.Body>
                    </Card>
                </Container>
        </div>



            {/* <div className="skillSet">
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
            <a className="skillLink">
              <span className="skillText">MongoDB</span>
              <img className="skillImg2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/2048px-Antu_mongodb.svg.png" alt="MongoDb" />
            </a>
            <a className="skillLink">
              <span className="skillText">Node.js</span>
              <img className="skillImg4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Nodejs" />
            </a>
            <a className="skillLink">
              <span className="skillText">Express.js</span>
              <img className="skillImg4" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express" />
            </a>
            <a className="skillLink">
              <span className="skillText">SQL</span>
              <img className="skillImg3" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" />
            </a>
            <a className="skillLink">
              <span className="skillText">Bootstrap</span>
              <img className="skillImg4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap" />
            </a>
          

        
            </div> */}
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
