import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import '../App.css'; // Import a CSS file for additional styling

function AdminLogin() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://be-skripsi-6v25wnffuq-uc.a.run.app/login/admin', {
        username: username,
        password: password,
      });

      localStorage.setItem('token', response.data.token);
      setAlert({ type: 'success', message: 'Login successful!' });

      setTimeout(() => {
        setAlert(null);
        nav('/');
      }, 2000);
    } catch (error) {
      setAlert({ type: 'error', message: error.response?.data?.message || 'An error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="login-page">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="login-form p-4">
          <Link to="/" className="text-decoration-none">
            <h1 className="text-center brand-name">Kos Dariz</h1>
          </Link>
            <p className="text-center mb-4">Ini login page untuk admin!</p>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="username"
                  placeholder="Username Admin"
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
              <Button className="my-3" style={{ width: '100%' }} variant="primary" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    {' Loading...'}
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </Form>
            <div className="mt-2 text-center">
              <a href="/login"> Kembali Ke Halaman Awal</a>
            </div>

            {alert && (
              <Alert variant={alert.type} onClose={() => setAlert(null)} dismissible className="mt-3">
                {alert.message}
              </Alert>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default AdminLogin;
