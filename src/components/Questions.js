import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card, Button, CardBody, Input, Col, Row, Label, FormGroup, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import axios from 'axios';

const quests = [
    {
        'id': "1",
        'q': "Do you tend to be excited and happy when being in a crowd to socialize?",
        'v': ["E", "I"],
    }, {
        'id': "2",
        'q': "Do you tend to observe things as it is without being considerate of possible causes or future risks?",
        'v': ["S", "N"],
    }, {
        'id': "3",
        'q': "Do you feel being empathetic is a bit hard and a rare occation in your daily life?",
        'v': ["T", "F"],
    }, {
        'id': "4",
        'q': "Do you love to be organized, for example keeping your environment tidy or planning to-do-lists and stick to it in daily basis?",
        'v': ["J", "P"],
    }
]

const finishAll = (questions, results) => {
    let complete = true;
  
    // {1: 'yes', 2: 'no'}
  
    questions.forEach((question) => {
      const givenAnswer = results[question.id];
  
      if (givenAnswer === undefined) {
        complete = false;
      }
    });
  
    return {
      complete
    };
}

const Questions = () => {
    const [results, setResults] = useState({});
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        findLast();
    }, []);

    const findLast = async () => {
        const response = await axios.get("http://localhost:5001/find");
        setUser(response.data);
    };

    const handleResult = (e) => {
        const { complete } = finishAll(quests, results);
        if (complete === true) {
            addMBTI(user);
            navigate('/result');
        }else{
            alert('Please answer all questions.')
        }
    }

    const addMBTI = async (e) => {
        await axios.patch(`http://localhost:5001/results/${user.id}`, {
            mbti: String(results['1']+results['2']+results['3']+results['4']),
        });
    }

    return(
        <React.Fragment>
            <Card className="text-center">
                <CardBody>
                </CardBody>
                
                <CardBody>
                    <FormGroup tag="fieldset">
                    { quests.map((quest, id) => 
                        <Row className="justify-content-md-center mb-5" key={id}>
                            <h4 style={{ color: '#F08080' }}>{quest.q} </h4>
                            <Row className="justify-content-md-center">
                                {quest.v.map((opt) => 
                                    <Col md={1} key={opt}>
                                    <FormGroup check>
                                        <Input
                                            name={quest.id}
                                            type="radio"
                                            checked={results[quest.id] === opt}
                                            onChange={() =>
                                                setResults((result) => ({
                                                ...result, [quest.id]: opt
                                                }))}
                                            style={{ borderColor:"#F08080"}}
                                        />
                                        {' '}
                                        <Label check style={{ color: '#F08080' }}>
                                            {opt === "E" || opt === "S" || opt === "T" || opt === "J" ? "YES":"NO"}
                                        </Label>
                                        </FormGroup>
                                    </Col>
                                )}
                            </Row>
                        </Row>
                        )}
                        
                            <Button type='button' onClick={handleResult} style={{ borderColor: '#F08080', backgroundColor: '#F08080' }}>Submit</Button>
                        
                        <Modal
                            toggle={function handleResult(){}}
                        >
                            
                            <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                            <Button
                                color="primary"
                                onClick={function noRefCheck(){}}
                            >
                                Okay
                            </Button>
                            </ModalFooter>
                        </Modal>
                    </FormGroup>
                </CardBody>
                <CardBody>

                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default Questions;