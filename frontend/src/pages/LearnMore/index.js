
import Nav from "../../components/nav";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import headshot from './assets/headshot.png';


const LearnMore = () => {
    return (
        <div>
            <Button href="/">Back</Button>
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
                            I’m a Software Engineer with a background in Management Information Systems. I have unique experience in Learning and Development, which allows me to collectively work with others to solve complex problems. My experience enables me to approach every issue with a logical and compassionate perspective.
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