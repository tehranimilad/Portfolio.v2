import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ProjectPage = () => {
    return (
      <div>
            <Button href="/">Back</Button>
<Container className="projectContainer">
      <Row>
        <Col><Image className="projectImages" src="https://github.com/tehranimilad/Cruise-North-America/raw/main/screenshots/Desktop1.png"></Image>
        <h2 className="projectTitle">Cruise America</h2>
              <p className="projectDesc">
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro
              </p>
              <Button variant="primary" href="https://cruise-north-america.up.railway.app/">Go to Cruise North America</Button>
        </Col>
        <Col><Image className="projectImages" src="https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png"></Image>
              <h2 className="projectTitle">Cryptosis</h2>
              <p className="projectDesc">
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; data stored using MongoDB database through Mongoose.
              </p>
              <Button variant="primary" href="https://cryptosis-app.herokuapp.com/">Go to Cryptosis</Button></Col>
      </Row>
    </Container>
      {/* <div>
        <Button href="/">Back</Button>
        <container className="projectContainer">
          <Row className="projectRows">
            <div className="projectDiv">
              <img className="projectImages" src="https://github.com/tehranimilad/Cruise-North-America/raw/main/screenshots/Desktop1.png"></img>
              <h2 className="projectTitle">Cruise America</h2>
              <p className="projectDesc">
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro
              </p>
              <Button variant="primary" href="https://cruise-north-america.up.railway.app/">Go to Cruise North America</Button>
            </div>
            <div className="projectDiv">
              <img className="projectImages" src="https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png"></img>
              <h2 className="projectTitle">Cryptosis</h2>
              <p className="projectDesc">
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; data stored using MongoDB database through Mongoose.
              </p>
              <Button variant="primary" href="https://cryptosis-app.herokuapp.com/">Go to Cryptosis</Button>
            </div>
          </Row>
        </container>
      </div> */}
    </div>
    )
}

export default ProjectPage