// import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
// import Container from 'react-bootstrap';

const Header = ({ nav }) => {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Toggle className='mx-2' aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse className='container mx-5' id="basic-navbar-nav">
        <a href="">React menu</a>
        <Nav className="ms-auto">
          {nav.map((data, index) => {
            if (data.menu_item_parent !==(1757) && data.ID !== (1757)) {
              return (
                <a className='nav-link me-2' key={index} href={data.guid}>
                  {data.post_title}
                </a>
              );
            }
            if(data.ID === (1757)) {
              return (
                <NavDropdown className='dropdown-center' key={index} title={data.post_title}>
                  {nav
                    .map((subData, subIndex) => (
                      <NavDropdown.Item key={subIndex} href={subData.url}>
                        {data.title}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
              );
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
