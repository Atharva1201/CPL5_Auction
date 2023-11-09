import logo from './logo.svg';
import './App.css';
import BasicExample from './Pages/UserHomePage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AppRoutes from './Routes/routes';

function App() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary' bg='warning'>
        <Container>
          <Navbar.Brand href='#home'>CELEBRIA PREMIER LEAGUE</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              {/* <Nav.Link href="#link">Winners</Nav.Link> */}
              <NavDropdown title='Winners' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.4 '>
                  Season 1 - Team C3
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4 '>
                  Season 2 - Snipers
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  {' '}
                  Season 3 - Shouting Eagles
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  {' '}
                  Season 4 - Squad Matador's
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  {' '}
                  Season 5 -
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Scoreboard' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  href='https://cricheroes.in/tournament/315370/Celebria-Premier-League(CPL)-2021/past-matches/1 '
                  target='blank'
                >
                  CPL 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://cricheroes.in/tournament/421068/Celebria-Premier-League(CPL-2.0)-Summer-2022/past-matches/1'
                  target='_blank'
                >
                  CPL 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://cricheroes.in/tournament/510643/Celebria-Premier-League-Season-3-Winter-2022/past-matches/1'
                  target='_blank'
                >
                  CPL 3
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://cricheroes.in/tournament/608534/CeLeBRiA-Premier-League-Season-4/past-matches/1'
                  target='_blank'
                >
                  {' '}
                  CPL 4
                </NavDropdown.Item>
                <NavDropdown.Item href='#' target='_blank'>
                  {' '}
                  CPL 5
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Auction History' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  href='http://raneonkar.com/cpl/auction2.0/ '
                  target='_blank'
                >
                  CPL Season 2 May-2022
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='http://raneonkar.com/cpl/auction3.0/ '
                  target='_blank'
                >
                  CPL Season 3 NOV-2022
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='http://raneonkar.com/cpl/auction4.0/ '
                  target='_blank'
                >
                  {' '}
                  CPL Season 4 APR-2023
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='http://raneonkar.com/cpl/auction5.0/ '
                  target='_blank'
                >
                  {' '}
                  CPL Season 5 NOV-2023
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/adminlogin'>Admin Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='App'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
