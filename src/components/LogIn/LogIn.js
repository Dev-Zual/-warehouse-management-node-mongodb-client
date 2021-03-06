import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import googlImg from '../../images/google.png';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Spinner from '../Spinner/Spinner';
const LogIn = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // logn in with ema & pass
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  //handle LogIn logn in with ema & pass
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  // if (loading || loading1) {
  //   return <Spinner></Spinner>;
  // }
  // get input value
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  // google provider
  const provider = new GoogleAuthProvider();
  const createUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const email = error.email;
      });
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
    <div className="w-50 mx-auto mt-4">
      <h2 className="text-center mt-5">Log In</h2>

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
              type="password"
              onBlur={handlePass}
              placeholder="Your password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button className="btn btn-dark" onClick={handleLogIn} type="submit">
          Log In
        </Button>
      </Form>
      {/* <p>{errorElement}</p> */}
      <div className="mt-4 d-flex align-items-center">
        <p>Don't have an acount?</p>
        <p>
          <Link to="/signin">
            <button className="btn btn-link text-decoration-none">
              Please sign up here
            </button>
          </Link>
        </p>
      </div>
      <div>
        <button
          className="d-flex align-items-center btn btn-secondary"
          onClick={createUserWithGoogle}
        >
          <img style={{ width: '50px' }} src={googlImg} alt="" />
          <p>SignIn with google</p>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
