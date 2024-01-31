
import axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
const EditDetailPenghuniModal = ({ show, handleClose, index, penghuni }) => {
    
  const [editedPenghuni, setEditedPenghuni] = useState({
    nama: index?.nama || "",
    noKamar: index?.noKamar || "",
    noHP: index?.noHP || "",
    username: index?.username || "",
    password: index?.isChange ? "sudah ganti password" : "belum ganti password",
  });

  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [deletePengSuccess, setdeletePengSuccess] = useState(false);
  // console.log()
  // ...
  const handleResetPassword = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/pass/${index?.id}`,
        null,  // Request body diubah menjadi null karena method PUT tidak memerlukan body
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setResetPasswordSuccess(true);
      setTimeout(() => {
        setResetPasswordSuccess(false);
        handleClose()
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleDeletePenghuni = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${index?.id}`,  // Request body diubah menjadi null karena method PUT tidak memerlukan body
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setdeletePengSuccess(true);
      setTimeout(() => {
        setdeletePengSuccess(false);
        handleClose()
        window.location.reload()
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  return (
    <Modal show={show} onHide={handleClose}>
      {resetPasswordSuccess && (
            <Alert variant="success" onClose={() => setResetPasswordSuccess(false)} dismissible>
              Password berhasil di-reset!
            </Alert>
        )}
      {deletePengSuccess && (
            <Alert variant="success" onClose={() => setResetPasswordSuccess(false)} dismissible>
              penghuni berhasil di-hapus!
            </Alert>
        )}
      <Modal.Header closeButton>
        <Modal.Title>Edit Detail Penghuni</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNama">
            <Form.Label>Nama Penghuni</Form.Label>
            <Form.Control
              type="text"
              value={editedPenghuni.nama}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formNomorKamar">
            <Form.Label>Nomor Kamar</Form.Label>
            <Form.Control
              type="text"
              value={editedPenghuni.noKamar}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formNomorHP">
            <Form.Label>Nomor HP</Form.Label>
            <Form.Control
              type="text"
              value={editedPenghuni.noHP}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={editedPenghuni.username}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              value={editedPenghuni.password}
              disabled
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="warning" onClick={() => handleResetPassword()}>
          Reset Password
        </Button>
        <Button variant="danger" onClick={() => handleDeletePenghuni()}>
          Hapus Penghuni
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDetailPenghuniModal;