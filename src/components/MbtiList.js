import React, { useState, useEffect, useDebugValue } from 'react';
import {Card, CardBody, CardTitle, CardText, CardGroup, Col, Container
} from 'reactstrap';
import axios from 'axios';

const List = () => {
    const [mbtis, setMbtis] = useState([]);

    useEffect(() => {
        getAllMbtis();
    }, []);

    const getAllMbtis = async () => {
        const response = await axios.get("http://localhost:5001/mbtis");
        setMbtis(response.data);
    };
    
    return(
        <React.Fragment>
            <Container style={{padding:0}}>
                <Card><h2 style={{color:'#F08080', margin:0, padding:10}} className="text-center">MBTI</h2></Card>
                
                <CardGroup className="mt-4">
                    { mbtis.map((mbti, id) => 
                        <Col key={id} md={3}  style={{ paddingBottom:20, paddingRight:5}}>
                        <Card className="text-center"  style={{ height:350}}>
                            <CardBody style={{ color: '#F08080'}}>
                                <CardTitle>
                                    <b>{mbti.name}</b>
                                </CardTitle>
                                <CardText>
                                    {mbti.desc}
                                </CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    )}
                </CardGroup>
            </Container>
        </React.Fragment>
    )
}

export default List;
