import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Toast } from 'react-bootstrap';
import axios from 'axios';

const ModalEditKamar = ({ show, handleClose, data }) => {
    const [, forceUpdate] = useState();
  const [tipeKamar, setTipeKamar] = useState(data?.tipeKamar);
  const [deskripsiKamar, setDeskripsiKamar] = useState(data?.deskripsiKamar);
  const [hargaKamar, setHargaKamar] = useState(data?.hargaKamar);
  const [ratingKamar, setRatingKamar] = useState(data?.ratingKamar);
  const [statusKamar, setStatusKamar] = useState(data?.statusKamar);
  const [fasilitasKamar, setFasilitasKamar] = useState(data?.fasilitasKamar);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleUpdateKamar = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem('token');

      const response = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar/${data.noKamar}`,
        {
          tipeKamar,
          deskripsiKamar,
          hargaKamar,
          ratingKamar,
          statusKamar,
          fasilitasKamar : JSON.parse(fasilitasKamar)
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log('Kamar updated:', response.data);
      setShowToast(true);
      handleClose();
    } catch (error) {
      console.error('Error updating kamar:', error);
    } finally {
      setLoading(false);
      window.location.reload()
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data Kamar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNoKamar">
            <Form.Label>No. Kamar</Form.Label>
            <Form.Control type="text" value={data?.noKamar} disabled />
          </Form.Group>
          <Form.Group controlId="formTipeKamar">
            <Form.Label>Tipe Kamar</Form.Label>
            <Form.Control
              type="text"
              value={tipeKamar}
              onChange={(e) => setTipeKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDeskripsiKamar">
            <Form.Label>Deskripsi Kamar</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={deskripsiKamar}
              onChange={(e) => setDeskripsiKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formHargaKamar">
            <Form.Label>Harga Kamar</Form.Label>
            <Form.Control
              type="number"
              value={hargaKamar}
              onChange={(e) => setHargaKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRatingKamar">
            <Form.Label>Rating Kamar</Form.Label>
            <Form.Control
              type="text"
              value={ratingKamar}
              onChange={(e) => setRatingKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formStatusKamar">
            <Form.Label>Status Kamar</Form.Label>
            <Form.Control
              type="text"
              value={statusKamar}
              onChange={(e) => setStatusKamar(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFasilitasKamar">
            <Form.Label>Fasilitas Kamar</Form.Label>
            <Form.Control
              type="text"
              value={fasilitasKamar}
              onChange={(e) => setFasilitasKamar(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleUpdateKamar} disabled={loading}>
          {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
        </Button>
      </Modal.Footer>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Sukses</strong>
        </Toast.Header>
        <Toast.Body>Data kamar berhasil diperbarui.</Toast.Body>
      </Toast>
    </Modal>
  );
};

export default ModalEditKamar;
