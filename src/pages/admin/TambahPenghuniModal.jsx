import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TambahPenghuniModal = ({ show, handleClose, tambahPenghuni }) => {
//   const [nama, setNama] = useState('');
//   const [nomorKamar, setNomorKamar] = useState('');

  const handleTambahPenghuni = () => {
    // Lakukan operasi tambah penghuni (misalnya, kirim ke server)
    // ...
    
    // Setelah operasi tambah, tutup modal dan reset formulir
    handleClose();
    // setNama('');
    // setNomorKamar('');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Data Penghuni</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNama">
            <Form.Label>Nama Penghuni</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama penghuni"
            //   value={nama}
            //   onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNomorKamar">
            <Form.Label>Nomor Kamar</Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan nomor kamar"
            //   value={nomorKamar}
            //   onChange={(e) => setNomorKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formNomorHP">
            <Form.Label>Nomor HP</Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan nomor HP"
            //   value={nomorKamar}
            //   onChange={(e) => setNomorKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTanggalMasuk">
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control
              type="date"
              placeholder="masuk kapan "
            //   value={nomorKamar}
            //   onChange={(e) => setNomorKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="KM_101"
            //   value={nomorKamar}
            //   onChange={(e) => setNomorKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="barukm101"
            //   value={nomorKamar}
            //   onChange={(e) => setNomorKamar(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleTambahPenghuni}>
          Tambah Penghuni
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TambahPenghuniModal;