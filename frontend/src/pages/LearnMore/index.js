
import Nav from "../../components/nav";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import headshot from './assets/headshot.png';


const LearnMore = () => {
    return (
        <div>
            <Button className="backBtn" href="/">Back</Button>
            <Nav />
           
                <Image className="avatar" src={headshot} fluid></Image>
           
                <Container className="learnMoreInfo">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="projectTitle">
                            Milad Tehrani
                        </Card.Title>
                        <Card.Text className="projectDesc">
                            Hey I'm Milad, its nice to meet you.
                            I'm a highly skilled software engineer with a background in management information systems who is committed to providing cutting-edge solutions that enhance operational efficiency and provide outcomes. I have a passion for technology and use my knowledge to solve challenging issues and assist organizations in achieving their objectives.
                        </Card.Text>
                        <Card.Title className="projectTitle">Skills</Card.Title>
                        <Card.Text className="projectDesc">
                        Javascript, React, Python, MongoDB, Node.js, Express, SQL, HTML, CSS, Bootstrap
                        </Card.Text>
                
        
                    </Card.Body>
                    </Card>
                </Container>

            
        </div>
    )
}

export default LearnMore;
