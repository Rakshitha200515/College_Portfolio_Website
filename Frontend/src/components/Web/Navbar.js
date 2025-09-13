import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'


export default function Navbar1() {
  return (
    <div>
      <Navbar fixied="top"  className="shadow back text-light" style={{ height: "15vh" }}>
        <Container>
          <Navbar.Brand className="text-warning tracking-in-expand fs-4">
          CPC Polytechnic College
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" d-flex gap-4 justify-content-end fs-6">
            <Nav.Link as={Link} to="/" ><AiFillHome size="20px"/></Nav.Link>
            <NavDropdown title="Academics" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewdepartment" >Department</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre" >Admission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewlab" >Lab Facility</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/viewgallery" >Gallery</Nav.Link>
            <NavDropdown title="Achievements " id="collasible-nav-dropdown"  renderMenuOnMount={true}>
              <NavDropdown.Item  as={Link} to="/achievementstudy">Studies</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/achievementextra">
              Extra Curricular
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Faculties" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewteaching">Teaching</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewnonteaching">
              Non-Teaching
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Notice Board" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewpanorama">Panorama of Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewscholarship">Scholarship Updates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewextracurricular">Extra Curricular Activities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewplacement">Placements </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewalumini">Alumini  </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/login" className="text-light">Login <BiLogIn size="20px"/> </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
