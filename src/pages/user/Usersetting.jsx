import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap"

function Usersetting() {
    const [dataDiri, setDataDiri] = useState({
        nama: '',
        email: '',
        noHp: '',
      });
    
      const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    
      const handleDataDiriChange = (e) => {
        const { name, value } = e.target;
        setDataDiri((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmitDataDiri = (e) => {
        e.preventDefault();
        // Lakukan logika untuk mengirim data diri ke server atau melakukan tindakan lain sesuai kebutuhan
        console.log('Data Diri yang akan dikirim:', dataDiri);
      };
    
      const handleSubmitPassword = (e) => {
        e.preventDefault();
        // Lakukan logika untuk mengirim data password ke server atau melakukan tindakan lain sesuai kebutuhan
        console.log('Data Password yang akan dikirim:', passwordData);
      };
  return (
    <>
    <Card  className="mb- p-3">
        <div>
      {/* Bagian Form Ubah Data Diri */}
      <Form onSubmit={handleSubmitDataDiri}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama lengkap"
                name="nama"
                value={dataDiri.nama}
                onChange={handleDataDiriChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan alamat email"
                name="email"
                value={dataDiri.email}
                onChange={handleDataDiriChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNoHp">
              <Form.Label>Nomor HP</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Masukkan nomor HP"
                name="noHp"
                value={dataDiri.noHp}
                onChange={handleDataDiriChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Simpan Perubahan Data Diri
        </Button>
      </Form>

      {/* Bagian Form Ganti Password */}
      <Form onSubmit={handleSubmitPassword} className="mt-4">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Password Saat Ini</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password saat ini"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNewPassword">
              <Form.Label>Password Baru</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password baru"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Konfirmasi Password Baru</Form.Label>
              <Form.Control
                type="password"
                placeholder="Konfirmasi password baru"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Simpan Perubahan Password
        </Button>
      </Form>
    </div>
        </Card>
    </>
  )
}

export default Usersetting