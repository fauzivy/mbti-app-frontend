import React from "react";
import {
  Container,
  Nav, NavItem,
  Card, CardTitle, CardSubtitle
} from "reactstrap";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from "./components/Home";
import Questions from './components/Questions';
import MbtiList from './components/MbtiList';
import History from './components/History';
import Result from './components/Result';


class App extends React.Component {   
  render(){
    return(
      <BrowserRouter>
        <header>
          <Container className="mt-3">
            <Nav>
              <NavItem>
                  <Link to="/" style={{ textDecoration: 'none', color: '#F08080', padding:16 }}>Home</Link>
              </NavItem>
              <NavItem>
                  <Link to="/mbtis" style={{ textDecoration: 'none', color: '#F08080', padding:16 }}>Lists</Link>
              </NavItem>
              <NavItem>
                  <Link to="/history" style={{ textDecoration: 'none', color: '#F08080', padding:16}}>History</Link>
              </NavItem>
            </Nav>
          </Container>
          <Container>
              <Card className="text-center mt-4"  style={{ padding: 60, backgroundColor: '#F08080'}}>
                <CardTitle style={{ color: '#FFF5EE'}}>
                  <h1 >MBTI GUESS</h1>
                </CardTitle>
                <CardSubtitle style={{ color: '#FFFAF0'}}>
                  Answer the questions and see what your MBTI is.
                </CardSubtitle>
              </Card>
          </Container>
        </header>

        <main>
          <Container  className="mt-4">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/questions" exact element={<Questions />} />
              <Route path="/mbtis" exact element={<MbtiList />} />
              <Route exact path="/history" element={<History />} />
              <Route path="/result" exact element={<Result />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
    );
  }
  
}

export default App;
