import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Row from 'react-bootstrap/Row';
const ProjectPage = () => {
    return (
        <div className="backgroundImage">
            <div>
            <Button href="/">Back</Button>
            {/* <Row>
            <Card className="text-center bg-primary" style={{ width: '30rem'}}>
            <Card.Img variant="top" src="https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png" />
            <Card.Body>
                <Card.Title>Cryptosis</Card.Title>
                <Card.Text>
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; data stored using MongoDB database through Mongoose.
                </Card.Text>
                <Button variant="light" href="https://cryptosis-app.herokuapp.com/">Go to Cryptosis</Button>
            </Card.Body>
            </Card>
            <Card className="text-center bg-primary" style={{ width: '30rem'}}>
            <Card.Img variant="top" src="https://github.com/tehranimilad/Cruise-North-America/raw/main/screenshots/Desktop1.png" />
            <Card.Body>
                <Card.Title>Cruise America</Card.Title>
                <Card.Text>
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro
                </Card.Text>
                <Button variant="light" href="https://cruise-north-america.up.railway.app/">Go to Cruise North America</Button>
            </Card.Body>
            </Card>
            </Row> */}
            <CardGroup>
      <Card className="text-center bg-primary">
        <Card.Img variant="top" src="https://github.com/tehranimilad/Cruise-North-America/raw/main/screenshots/Desktop1.png" />
        <Card.Body>
                <Card.Title>Cruise America</Card.Title>
                <Card.Text>
                MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro
                </Card.Text>
                <Button variant="light" href="https://cruise-north-america.up.railway.app/">Go to Cruise North America</Button>
            </Card.Body>
      </Card>
      <Card className="text-center bg-primary">
      <Card.Img variant="top" src="https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png" />
            <Card.Body>
                <Card.Title>Cryptosis</Card.Title>
                <Card.Text>
                MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; data stored using MongoDB database through Mongoose.
                </Card.Text>
                <Button variant="light" href="https://cryptosis-app.herokuapp.com/">Go to Cryptosis</Button>
            </Card.Body>
      </Card>
      <Card className="text-center bg-primary">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
            
        </div>
        </div>
    )
}

export default ProjectPage