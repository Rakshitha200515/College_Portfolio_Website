import React from "react";
import Navbar1 from "../Web/Navbar";
import logo from "../../images/slide1.jpg";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";
import admi from "../../images/admission.jpg";
import { TypeAnimation } from "react-type-animation";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { MdEventRepeat } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Home() {
  return (
    <div>
      <Navbar1 />
      <div className=" main">
        <img src={logo} width="100%" alt="" />
      </div>
      <div className="text-h ">
        <TypeAnimation
          sequence={[
            "WELCOME TO CPC POLYTECHNIC COLLEGE",
            1000,
            "ADMISSION OPEN - 2023",
            2000,
            "WELCOME TO CPC POLYTECHNIC COLLEGE",
            3000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.8em", display: "inline-block" }}
          className="text-dark"
        />
      </div>
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>
                    VISION <span className="text-warning">CPC</span>
                  </h3>
                </Card.Title>
                <Card.Text className="text-j">
                  To be recognized as best institution for value based technical
                  education and consultancy to meet the needs of industry,
                  academia and society. To be recognized as best institution for
                  value based technical education and consultancy to meet the
                  needs of industry, academia and society.
                </Card.Text>
                {/* <Card.Link className="btn btn-warning" as={Link} to="/about">Read more..</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>
                    MISSION <span className="text-warning">CPC</span>
                  </h3>
                </Card.Title>
                <Card.Text>
                  To impart quality outcome based education in technical and non
                  technical fields through best in class infrastructure, faculty
                  and effective teaching-learning process. To promote
                  collaboration with industry, alumni .
                </Card.Text>
                {/* <Card.Link className="btn btn-warning">Read more..</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <HiOutlineBuildingLibrary size="80px" />
                  <h4>DEPARTMENTS</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <FaUsers size="80px" />
                  <h4>PLACEMENTS</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <FaMedal size="80px" />
                  <h4>ACHIEVEMENTS</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <MdEventRepeat size="80px" />
                  <h4>EVENTS</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className=" main my-4">
        <img src={admi} width="100%" alt="" />
      </div>
      <div className="text-i text-warning tracking-in-expand">
        <h2>ADMISSIONS</h2>
        <h5>
          Find out how you can secure your future with an education at CPC.
        </h5>
        <Link className="text-light" as={Link} to="/pre">
          EXPLORE ADMISSIONS
        </Link>
      </div>
      <div className="d-flex gap-5 icon">
        <ImLab size="80px" color="white" />
        <SiRedux size="90px" color="white" />
        <FaUserGraduate size="80px" color="white" />
      </div>
      <Container>
      <div className="row">
        <div className="col-lg-9 mt-5 ">
          <div className="card p-3">
            <div className="card-content">
              <h2 className="card-title text-center">WHY CHOOSE US</h2>
              <p className="card-description">
                We want to shape the future of students by creating an
                environment to develop their innovative skills which would bring
                about a transition in the society. Technology changes
                everything. We provide students a new way of learning giving
                them maximum exposure about the latest trends in engineering.
                Our top quality faculty and infrastructure facilitate this
                process of learning and enrichment in the best possible ways.
              </p>
              <p className="card-description">
                We want to shape the future of students by creating an
                environment to develop their innovative skills which would bring
                about a transition in the society. Technology changes
                everything. We provide students a new way of learning giving
                them maximum exposure about the latest trends in engineering.
                Our top quality faculty and infrastructure facilitate this
                process of learning and enrichment in the best possible ways.
              </p>
              <p className="card-description">
                We want to shape the future of students by creating an
                environment to develop their innovative skills which would bring
                about a transition in the society. Technology changes
                everything. We provide students a new way of learning giving
                them maximum exposure about the latest trends in engineering.
                Our top quality faculty and infrastructure facilitate this
                process of learning and enrichment in the best possible ways.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 col-lg-3">
          <Card style={{ width: "18rem" }} className="text-center">
            <CardHeader className="back text-light fs-4">
              Quick Links
            </CardHeader>
            <Card.Body>
              <Card.Text as={Link} to="/viewdepartment">
                Department
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/viewteaching">
                Faculty Deatils
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/achievementstudy">
                Acheviments
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/viewgallery">
                Gallery
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/contact">
                Contact Us
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/pre">
                Admission
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </Container>

      (
    <div className="container-fluid ">
      <br />
      <h2 style={{ textAlign: 'center' }}>TOP RECRUITERS</h2>
      <div className="row justify-content-start m-4">
        <div className="col-lg-2">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-2 ">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c2} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c3} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c4} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c5} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-2 ">
          <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
            <img src={c1} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  

      <footer className="back text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>Disclaimer </h5>
              <p className="text-muted">
                Please note that this page also provides links to the websites /
                web pages of Govt. Ministries/Departments/Organisations.The
                content of these websites are owned by the respective
                organisations and they may be contacted for any further
                information or suggestion
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Contact Information</h5>
              <h5>Govt CPC Polytechnic</h5>
              <hr/>
              <p>N R Mohalla, Ashoka Road, Mysore- 570007</p>
              <p>Phone: 0821- 2441444</p>
              <p>Email: govtcpc108@gmail.com</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/department">Courses</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
