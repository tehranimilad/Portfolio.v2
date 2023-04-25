import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Nav from '../../components/nav';
import cruiseAmerica from './assets/screenRecording1.gif'
import cruiseAmerica2 from './assets/screenRecording2.gif'
import { Link } from 'react-router-dom';

const ProjectPage = () => {
    return (
      <div>
            <Button className="backBtn" href="/">Back</Button>
            <Nav />
            <h1 className="projectHeadliner">PROJECTS</h1>
      <Container className="learnMoreInfo">
        <Card className="text-center">
        <Card.Header>Auto Enthusiast MEN-Stack App</Card.Header>
        <Col><Image className="projectImages" src={cruiseAmerica}></Image>
        <Card.Body>
        <Card.Title className="projectTitle">Cruise America</Card.Title>
              <Card.Text className="projectDesc">
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro.
              </Card.Text>
              <div className="projectButtonDiv">
              <Link className="projectButtons" to="https://cruise-north-america.herokuapp.com/" target="_blank">Go to Cruise North America</Link>
              </div>
        </Card.Body>
        <Card.Footer className="text-muted">Deployed onto Railway and Heroku</Card.Footer>
        </Col>
        </Card>
        <br />
        <Card className="text-center">
        <Card.Header>Cryptocurrency MERN-Stack App</Card.Header>
        <Col className="projectColumn"><Image className="projectImages" src={cruiseAmerica2}></Image>
        <Card.Body>
              <Card.Title className="projectTitle">Cryptosis</Card.Title>
              <Card.Text className="projectDesc">
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; relational database stored using MongoDB database through Mongoose. Cryptosis uses third-party API's in order to retrieve Cryptocurrency relevant data. 
              </Card.Text>
              <div className="projectButtonDiv">
              <Link className="projectButtons" to="https://cryptosis-app.herokuapp.com/" target="_blank">Go to Cryptosis</Link>
              </div>
        </Card.Body>
        <Card.Footer className="text-muted">Deployed onto Heroku</Card.Footer>
        </Col>
        </Card>
    </Container>
    <br />
    </div>
    )
}

export default ProjectPage
