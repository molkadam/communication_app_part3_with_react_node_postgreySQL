import React, { useEffect, useState } from "react";
import { Container, Button, Alert, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { userGetById } from "../Services/UserServices";
import Cookies from "js-cookie";
const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const message = state?.msg;

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // alert(Cookies.get('token'));
  const [activeUserId, setActiveUserId] = useState(Cookies.get("activeUserId"));
  const getUserName = async (uid) => {
    try {
      const user = await userGetById(uid);
      setUsername(user ? user.name : "Unknown User");
    } catch (error) {
      setUsername("Unknown Users");
    }
  };

  useEffect(() => {
    if (Cookies.get("activeUserId")) {
      setActiveUserId(Cookies.get("activeUserId"));
    }
  }, []);

  useEffect(() => {
    if (activeUserId) {
      getUserName(activeUserId);
      setIsLoggedIn(true);
    }
  }, [activeUserId]);

  return (
    <div className="welcome-page">
      <Container className="text-center">
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            {isLoggedIn ? (
              <>
                <h1 className="display-4 welcome-title">
                  Welcome, {username}!
                </h1>
                <p className="lead">You are successfully logged in.</p>
              </>
            ) : (
              <>
                <h1 className="display-4 welcome-title">
                  Welcome to React Chat App
                </h1>
                {message && (
                  <Alert variant="info" className="mt-3">
                    {message}
                  </Alert>
                )}
                <div className="mt-5">
                  <h4>Existing Users</h4>
                  <Button
                    variant="primary"
                    onClick={handleLoginClick}
                    className="mx-2 my-2"
                  >
                    Login
                  </Button>
                </div>
                <div className="mt-4">
                  <h4>New Users</h4>
                  <Button
                    variant="secondary"
                    onClick={handleRegisterClick}
                    className="mx-2 my-2"
                  >
                    Register
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
