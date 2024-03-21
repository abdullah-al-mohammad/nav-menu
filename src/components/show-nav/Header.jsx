// import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const Header = ({ nav }) => {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Toggle className='mx-2' aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse className='container mx-5' id="basic-navbar-nav">
        <a href="">React menu</a>
        <Nav className="ms-auto">
          {nav.map((data, index) => {
            if (data.classes[0] ===('fancyscroll')) {
              return (
                <a className='nav-link me-2' key={index} href={data.guid}>
                  {data.post_title}
                </a>
              );
            } else if (data.classes.includes('dropdown')) {
              return (
                <NavDropdown className='dropdown-center' key={index} title={data.title}>
                  {nav
                    .map((subData, subIndex) => (
                      <NavDropdown.Item key={subIndex} href={subData.url}>
                        {data.classes ===0 ? subData.title: null}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
              );
            }
            return null; // Ensure to have a return statement
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
