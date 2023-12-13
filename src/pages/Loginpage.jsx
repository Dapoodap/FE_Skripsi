
import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';

function Loginpage() {
  // const {Token} = useSelector((state) => state);
  const nav = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    // dispatch(setToken(username))
    // console.log(username,password)
    try {
      const response = await axios.post('https://kosdariz-6v25wnffuq-uc.a.run.app/login/penghuni', {
        username: username,
        password: password,
      });

      // Handle response accordingly, for example, set authentication token or navigate to the next page.
      alert('Login successful!');
      localStorage.setItem('token',response.data.token)
      nav('/');
    } catch (error) {
      alert(error.response.data.message)
      console.error('Error logging in:', error.response.data);
      // Handle login error, for example, show an error message to the user.
    }
  };
  // useEffect(()=>{
  //   console.log(Token)
  // },[Token])
  return (
    <>
    <Container fluid>
        <h2>Kos Dariz</h2>
    </Container>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h1 className='text-center' style={{ fontWeight:'600',letterSpacing:'1.8px' }}>LOGIN</h1>
        <p className='text-center'>Yang dapat login hanya penghuni yang memiliki username dan password !</p>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username Penghuni</Form.Label>
            <Form.Control type="username" placeholder="Masukkan Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <Form.Text className="text-muted">
              Pastikan username yang anda miliki sudah benar
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan Password" value={password}
                onChange={(e) => setPassword(e.target.value)}  />
          </Form.Group>
          <Button className='my-5' style={{ width:'100%' }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div className="mt-2 text-center">
           <a href="/adminLogin"> Kembali Ke Halaman Awal</a>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Loginpage