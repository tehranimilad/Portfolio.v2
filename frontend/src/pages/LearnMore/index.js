import { useEffect } from "react";
import Nav from "../../components/nav";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const LearnMore = () => {
    return (
        <div>
            <Button href="/">Back</Button>
            <Nav />
           
                <Image className="avatar" src="https://ice-us-wdc-117394.icedrive.io/download?p=mzu2iJH8tyxlpadtKAJ1T9PWK3hnEuqZ_iUTTUlQfQWhdf3EUkwvC08fF89PV6Ti_GkkmD6idSSZlcYkJ.wmGmHreqQHbGHd3v3Fun_gKmI4.WL4gqx7Ke1EvvWXf..8sYhNlaIx6MmjPzY5ix0cIptTDN2_cPcXrRWeINJbO0vm9pfTzXqRRKmtc13tindi7iuaC95I0UaIO9qFWouD6yDuqYYWemAis674Axlqrlk-" fluid></Image>
           
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
                    </Card.Body>
                    </Card>
                </Container>

            
        </div>
    )
}

export default LearnMore;