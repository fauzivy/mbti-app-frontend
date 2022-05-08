import React, {useState} from 'react';
import {
    Card, Button, CardBody, Input, Col, Row
} from 'reactstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const completion = (user) => {
    let complete = true;
  
    // {1: 'yes', 2: 'no'}
  

    if (user === undefined || user === '') {
        complete = false;
    }

    return {
      complete
    };
}

const Home = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const handleUserChange = event => {
        setUser(event.target.value)
    }

    const newUser = async (ev) => {
        await axios.post("http://localhost:5001/results", {
            name: user,
        });
    }

    const handleSubmit = async (ev) => {
        const { complete } = completion(user);
        if(complete === true){
            newUser();
            navigate('/questions');
        }else{
            alert('Fill your name first to start')
        }
    };

    return(
        <React.Fragment>
            <Card className="text-center">

                <CardBody style={{padding:30}}>
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                <Input required placeholder="Input your name first" name="name" onChange={handleUserChange} value={user} style={{ margin: 10}}/>
                                <Button type="button" style={{ backgroundColor: '#F08080'}} onClick={handleSubmit} >
                                    Start
                                </Button>
                            </Col>
                        </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}


export default Home;