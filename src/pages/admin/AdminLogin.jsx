import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function AdminLogin() {
  return (
    <>
    <Container fluid>
        <h2>Kos Dariz</h2>
    </Container>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h1 className='text-center' style={{ fontWeight:'600',letterSpacing:'1.8px' }}>ADMIN LOGIN</h1>
        <p className='text-center'>Ini login page untuk admin !</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username Admin</Form.Label>
            <Form.Control type="username" placeholder="Masukkan Username" />
            <Form.Text className="text-muted">
              Pastikan username yang anda miliki sudah benar
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan Password" />
          </Form.Group>
          <Button className='my-5' style={{ width:'100%' }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div className="mt-2 text-center">
           <a href="/login"> Kembali Ke Halaman Awal</a>
        </div>
      </div>
    </Container>
    </>
  )
}

export default AdminLogin