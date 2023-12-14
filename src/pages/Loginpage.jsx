import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const nav = useNavigate();
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
        nav('/');
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setShowError(true);
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <>
      <Container fluid>
        <h2>Kos Dariz</h2>
      </Container>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h1 className="text-center" style={{ fontWeight: '600', letterSpacing: '1.8px' }}>
            LOGIN
          </h1>
          <p className="text-center">Yang dapat login hanya penghuni yang memiliki username dan password !</p>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username Penghuni</Form.Label>
              <Form.Control
                type="username"
                placeholder="Masukkan Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">Pastikan username yang anda miliki sudah benar</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="my-5" style={{ width: '100%' }} variant="primary" type="submit">
              Login
            </Button>
          </Form>

          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              {errorMessage}
            </Alert>
          )}

          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible className="fixed-top fixed-right">
              {successMessage}
            </Alert>
          )}

          <div className="mt-2 text-center">
            <a href="/adminLogin"> Kembali Ke Halaman Awal</a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Loginpage;
