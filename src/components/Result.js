import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardBody,
} from 'reactstrap';

import Home from './Home';
import MbtiList from './MbtiList';

const Result = () => {
    const[user, setUser] = useState({});

    useEffect(() => {
        findLast();
    }, []);

    const findLast = async () => {
        const response = await axios.get("http://localhost:5001/find");
        setUser(response.data);
    };
    
    return(
        <React.Fragment>
            <Card className="text-center" style={{color: '#F08080'}}>
                <CardBody>
                    <b style={{textTransform: 'capitalize'}}>{user.name}</b>, we think you are an
                    <h1>{user.mbti}</h1>
                    <Link to="/mbtis" element={<MbtiList />} style={{ color:'#F08080'}}>
                    Read more about {user.mbti} and other MBTIs here
                    </Link>
                    <br />
                    Please do a qualitative deep test by professionals to find your true MBTI result.
                    
                </CardBody>
                
                <Link to="/" element={<Home />}>
                    <Button type="button" style={{ borderColor: '#F08080', backgroundColor: '#F08080', marginBottom:30}}>
                        Check Again
                    </Button>
                </Link>                
            </Card>
        </React.Fragment>
    )
}

export default Result;