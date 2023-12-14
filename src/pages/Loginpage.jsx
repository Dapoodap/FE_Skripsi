import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Import a CSS file for additional styling

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://be-skripsi-6v25wnffuq-uc.a.run.app/login/penghuni', {
        username: username,
        password: password,
      });

      localStorage.setItem('token', response.data.token);
      setShowSuccess(true);
      setSuccessMessage('Login successful!');
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <Container fluid className="login-page">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="login-form p-4">
          <h1 className="text-center brand-name">Kos Dariz</h1>
          <p className="text-center mb-4">Hanya penghuni dengan username dan password yang dapat masuk.</p>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="username"
                placeholder="Username Penghuni"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="my-3" variant="primary" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form>

          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible className="mt-3">
              {errorMessage}
            </Alert>
          )}

          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible className="mt-3">
              {successMessage}
            </Alert>
          )}

          <div className="text-center mt-4">
            <Link to="/">Kembali ke Halaman Awal</Link>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Loginpage;
