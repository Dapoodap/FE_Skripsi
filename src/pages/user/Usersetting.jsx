import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row, Alert, Toast } from "react-bootstrap";

function Usersetting() {
  const [userData, setUserData] = useState({
    id: 1, // Replace with the actual user ID
    nama: "",
    noKamar: "",
    noHP: "",
    jenisKelamin: "",
    alamat: "",
    tanggalMasuk: "",
  });

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const token = localStorage.getItem("token");
        const idUser = jwtDecode(token).id;
        const userResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${idUser}`
        );
        setUserData(userResponse.data.data); // Assuming the API response contains the user data
      } catch (error) {
        console.error("Error fetching data by ID:", error);
      }
    };

    fetchUserById();
  }, []);

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showDataDiriToast, setShowDataDiriToast] = useState(false);
  const [showPasswordToast, setShowPasswordToast] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitDataDiri = async (e) => {
    e.preventDefault();
    try {
      // Implement logic to update user data by ID (POST request)
      const token = localStorage.getItem("token");
      const idUser = jwtDecode(token).id;
      await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${idUser}`,
        {
          nama: userData.nama,
          noHp: userData.noHP,
          alamat: userData.alamat,
          jenisKelamin: userData.jenisKelamin,
        }
      );

      setShowDataDiriToast(true);
    } catch (error) {
      console.error("Error updating data diri:", error);
      // Handle the error and provide appropriate feedback to the user
    }
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    // Check if the new password and confirm password match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
      try {
        // Implement logic to update user password by ID (POST request)
        const token = localStorage.getItem("token");
        const idUser = jwtDecode(token).id;
        await axios.put(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/change/${idUser}`,
          {
            password: passwordData.confirmPassword,
          }
        );

        setShowPasswordToast(true);
      } catch (error) {
        console.error("Error updating password:", error);
        // Handle the error and provide appropriate feedback to the user
      }
    }
  };

  return (
    <>
      <Card className="mb- p-3">
        <div>
          {/* Form Ubah Data Diri */}
          <Form onSubmit={handleSubmitDataDiri}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formNama">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    name="nama"
                    value={userData.nama}
                    onChange={(e) =>
                      setUserData({ ...userData, nama: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formNoKamar">
                  <Form.Label>No. Kamar</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="No. Kamar"
                    name="noKamar"
                    value={userData.noKamar}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formNoHp">
                  <Form.Label>Nomor HP</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Masukkan nomor HP"
                    name="noHP"
                    value={userData.noHP}
                    onChange={(e) =>
                      setUserData({ ...userData, noHP: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formAlamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Alamat"
                    name="alamat"
                    value={userData.alamat}
                    onChange={(e) =>
                      setUserData({ ...userData, alamat: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formJenisKelamin">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Jenis Kelamin"
                    name="jenisKelamin"
                    value={userData.jenisKelamin}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Simpan Perubahan Data Diri
            </Button>
          </Form>

          {/* Form Ganti Password */}
          <Form onSubmit={handleSubmitPassword} className="mt-4">
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
            {passwordMatchError && (
              <Alert variant="danger">
                Password baru dan konfirmasi password tidak sesuai.
              </Alert>
            )}
            <Button variant="primary" type="submit">
              Simpan Perubahan Password
            </Button>
          </Form>
        </div>
      </Card>

      {/* Toast for Data Diri */}
      <Toast
        show={showDataDiriToast}
        onClose={() => setShowDataDiriToast(false)}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          minWidth: "250px",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Sukses!</strong>
        </Toast.Header>
        <Toast.Body>Data diri berhasil diubah.</Toast.Body>
      </Toast>

      {/* Toast for Password */}
      <Toast
        show={showPasswordToast}
        onClose={() => setShowPasswordToast(false)}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          minWidth: "250px",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Sukses!</strong>
        </Toast.Header>
        <Toast.Body>Password berhasil diubah.</Toast.Body>
      </Toast>
    </>
  );
}

export default Usersetting;
