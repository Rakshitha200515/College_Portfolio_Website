import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Card,
  CardImg,
} from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

const ViewGallery = () => {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDes, setSelectedDes] = useState("");

  useEffect(() => {
    // Fetch the images using Axios
    axios
      .get(baseurl + "/getgallery")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageClick = (imageUrl, Des) => {
    setSelectedImage(imageUrl);
    setSelectedDes(Des);
    setShow(true);
  };

  return (
    <>
      <Navbar1 />
      <Container>
        <h2 className="text-center mt-5">Gallery</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4 mt-4">
          {images.map((image, index) => (
            <Col key={index}>
              <Card
                onClick={() => handleImageClick(image.image, image.description)}
              >
                <div className="p-2">
                  <CardImg
                    top
                    src={image.image}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <p>{image.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
       
        <Modal size="md" show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="img-fluid"
              width="450px"
            />
            <p>{selectedDes}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
       
      </Container>
    </>
  );
};

export default ViewGallery;
