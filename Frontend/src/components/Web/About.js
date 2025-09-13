import React from "react";
import Navbar1 from "./Navbar";
import { Button, Card } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Navbar1 />
      <Card className="w-75 mx-auto mt-5 ">
        <Card.Header as="h5" className="text-center back text-light">
          About Us
        </Card.Header>
        <Card.Body>
          {/* <Card.Title className="text-center">
            {" "}
            CPC Polytechnic College
          </Card.Title> */}
          <Card.Text >
            <ul >
              <li>
               <b className="text">Courses:</b> CPC Polytechnic offers diploma courses in various
                engineering disciplines, including civil engineering, mechanical
                engineering, electrical and electronics engineering, computer
                science and engineering, and electronics and communication
                engineering.
              </li>
              <li>
                <b className="text" >Affiliation:</b> The institution is affiliated with the Board of
                Technical Education (BTE), Government of Karnataka.
              </li>
              <li>
                <b className="text">Campus:</b> CPC Polytechnic has a campus located in a serene
                environment with modern facilities such as well-equipped labs,
                library, and sports facilities.
              </li>
              <li>
                <b className="text">Faculty:</b> The institution has a team of experienced faculty
                members who impart theoretical and practical knowledge to the
                students and guide them to excel in their chosen field of study.
              </li>
              <li>
                <b className="text">Mission:</b> The institution aims to provide quality technical
                education to its students and develop them into competent
                professionals who can contribute to society and industry.
              </li>
              <li>
              <b className="text"> Vision: </b>The institution aims to be a premier technical education
                institution, providing quality education and research in
                engineering and technology, and producing competent
                professionals who can contribute to the society and industry.
              </li>

              Overall, CPC Polytechnic is a technical education institution in
              Mysore, offering quality education, modern facilities, and
              experienced faculty to its students, with the mission of
              developing competent professionals who can contribute to society
              and industry, and the vision of becoming a premier technical
              education institution.
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
