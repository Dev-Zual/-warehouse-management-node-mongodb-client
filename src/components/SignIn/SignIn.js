import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // use signup with emai pass by hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // create user with ema & pass
  const handleSignUpWithEmailPass = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  // error in create user with ema & pass
  // if (error || error1) {
  //   setErrorMsg('error', error.message);
  // }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  // if (loading) {
  //   return <Spinner></Spinner>;
  // }
  // get input value
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  // bootstrap form validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center mt-5">Sign Up</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            className="mt-4"
            as={Col}
            md="12"
            controlId="validationCustom05"
          >
            <Form.Label>Your eamil</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Your email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mt-4"
            as={Col}
            md="12"
            controlId="validationCustom05"
          >
            <Form.Label>Your password</Form.Label>
            <Form.Control
              onBlur={handlePass}
              type="password"
              placeholder="Your password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <p>{errorMsg}</p>
        <Button
          className="btn btn-dark"
          onClick={handleSignUpWithEmailPass}
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <div className="mt-4 d-flex align-items-center">
        <p>Already have an acount?</p>
        <p>
          <Link to="/login">
            <button className="btn btn-link text-decoration-none">
              Please Login here
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
