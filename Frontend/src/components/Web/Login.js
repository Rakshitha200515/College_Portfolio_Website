import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";


export default function Login() {

  const navigate = useNavigate();

  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin() {
    debugger;
    const obj = { id: id, password: password };
    console.log(obj);
    toast
      .promise(
        axios.post(baseurl + "/login", obj),
        {
          pending: "Please wait...",
          success: "Login Successfully",
        },
        { position: "top-center" }
      )
      .then((res) => {
        if (res.data === "Admin") {
          sessionStorage.setItem("admin", id);
          navigate("/admin");
        }
        
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data ? err.response.data : "Failed to login", {
          position: "top-center",
        });
      });
  }

  return (
    <Row className="m-0">
      <div className="col-lg-6 back bg-image" style={{ height: "100vh" }}>
      </div>
      <div className="col-lg-6 " style={{ height: "100vh" }}>
        <div className="mx-auto login" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="text-center tracking-in-expand ">
              <h1 >Login</h1>
              <p style={{ color: "gray" }}>"Securely Access Your Account"</p>
              <br />
            </Card.Title>
            <Card.Text>
              <label>Enter User ID</label>
              <input
                type={"text"}
                className="form-control mb-3"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label>Enter Password</label>
              <input
                type={"password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Card.Text>
          
            <div className="d-flex gap-3 mt-3">
              <Button variant="warning" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="secondary" as={Link} to="/">
                Back
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Row>
    
  );
}
