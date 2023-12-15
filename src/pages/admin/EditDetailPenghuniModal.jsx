
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
const EditDetailPenghuniModal = ({ show, handleClose, index, handleEditPenghuni, penghuni }) => {
    
  const [editedPenghuni, setEditedPenghuni] = useState({
    nama: index?.nama || "",
    noKamar: index?.noKamar || "",
    noHP: index?.noHP || "",
    username: index?.username || "",
    password: index?.isChange ? "sudah ganti password" : "belum ganti password",
  });

  // ...
  
  return (
    <Modal show={show} onHide={handleClose}>
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
        <Button variant="warning" onClick={() => handleEditPenghuni(index, editedPenghuni)}>
          Reset Password
        </Button>
        <Button variant="danger" onClick={() => handleEditPenghuni(index, editedPenghuni)}>
          Hapus Penghuni
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDetailPenghuniModal;