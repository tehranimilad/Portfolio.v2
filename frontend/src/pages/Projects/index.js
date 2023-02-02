import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Nav from '../../components/nav';

const ProjectPage = () => {
    return (
      <div>
            <Button href="/">Back</Button>
            <Nav />
      <Container className="projectContainer">
        <Card className="text-center">
        <Card.Header>Auto Enthusiast MEN-Stack App</Card.Header>
        <Col><Image className="projectImages" src="https://github.com/tehranimilad/Cruise-North-America/raw/main/screenshots/Desktop1.png"></Image>
        <Card.Body>
        <Card.Title className="projectTitle">Cruise America</Card.Title>
              <Card.Text className="projectDesc">
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro.
              </Card.Text>
              <Button variant="primary" href="https://cruise-north-america.up.railway.app/">Go to Cruise North America</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Deployed onto Railway and Heroku</Card.Footer>
        </Col>
        </Card>
        <br />
        <Card className="text-center">
        <Card.Header>Cryptocurrency MERN-Stack App</Card.Header>
        <Col className="projectColumn"><Image className="projectImages" src="https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png"></Image>
        <Card.Body>
              <Card.Title className="projectTitle">Cryptosis</Card.Title>
              <Card.Text className="projectDesc">
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; data stored using MongoDB database through Mongoose.
              </Card.Text>
              <Button variant="primary" href="https://cryptosis-app.herokuapp.com/">Go to Cryptosis</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Deployed onto Heroku</Card.Footer>
        </Col>
        </Card>
    </Container>
    </div>
    )
}

export default ProjectPage