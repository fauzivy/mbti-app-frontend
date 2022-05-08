import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, Button, Table, Container
} from 'reactstrap';

import Home from './Home';

const History = (props) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await axios.get("http://localhost:5001/results");
        setUser(response.data);
    };

    // const deleteUser = async (id) => {
    //     await axios.delete(`http://localhost:5001/${id}`);
    //     getAllUsers();
    // };

    return(
        <React.Fragment>
            <Container style={{padding:0}} className="text-center">
                <Card><h2 style={{ color: '#F08080', margin:0, padding:10}}>History</h2></Card>
                <Card  style={{padding:50}} className="mt-4">
                    
                    <Table hover>
                        <thead style={{ color: '#F08080' }}>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    MBTI
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, id) => (
                                <tr key={id} style={{textTransform: 'capitalize', color:'#F08080'}}>
                                    <th scope="row">
                                        {id + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.mbti}
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </Table>

                    <Link to="/" element={<Home />}>
                        <Button type="button" style={{ borderColor: '#F08080', backgroundColor: '#F08080', marginBottom:30}}>
                            New Test
                        </Button>
                    </Link>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default History;