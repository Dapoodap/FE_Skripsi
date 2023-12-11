import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ReviewLaporanModal({ show, handleClose, laporan, handleSolved }) {
  const [balasan, setBalasan] = useState('');

  const handleBalasanChange = (event) => {
    setBalasan(event.target.value);
  };

  const handleSubmit = () => {
    // Proses pengiriman balasan dan pembaruan status ke server
    // Misalnya, Anda bisa menggunakan fungsi handleSolved yang dilewatkan dari parent component
    // handleSolved(laporan.id, balasan);

    // Tutup modal setelah submit
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Review Laporan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Judul Laporan:</strong> </p>
        <p><strong>Oleh:</strong> </p>
        <p><strong>Isi Laporan:</strong></p>

        {/* Form untuk memberi balasan */}
        <Form.Group controlId="balasan">
          <Form.Label>Balasan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan balasan Anda"
            // value={balasan}
            // onChange={handleBalasanChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Selesaikan dan Kirim Balasan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewLaporanModal;
