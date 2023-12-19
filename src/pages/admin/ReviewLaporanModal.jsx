import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Spinner, Toast } from 'react-bootstrap';

function ReviewLaporanModal({ show, handleClose, laporanid }) {
  const [laporan, setLaporan] = useState();
  const [loading, setLoading] = useState(true);
  const [showSubmitToast, setShowSubmitToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  useEffect(() => {
    const fetchLaporan = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor/${laporanid}`, {
          headers: {
            Authorization: token,
          },
        });
        setLaporan(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchLaporan();
  }, [laporanid]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor/${laporan?.id}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Laporan berhasil dihapus');
      setShowDeleteToast(true);
      window.location.reload() // Refresh halaman setelah delete
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor/${laporan?.id}`,
        {
          StatusLaporan: !laporan.StatusLaporan,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log('Status laporan berhasil diselesaikan');
      setShowSubmitToast(true);
      window.location.reload() // Refresh halaman setelah submit
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Review Laporan</Modal.Title>
      </Modal.Header>
      {loading ? (
        <Spinner animation="border" className="mx-auto mt-5" />
      ) : (
        <Modal.Body>
          <p>
            <strong>Jenis Laporan: {laporan.JenisKeluhan}</strong>
          </p>
          <p>
            <strong>Isi Laporan:</strong>
          </p>
          <p>
            <strong>{laporan.DeskripsiKeluhan}</strong>
          </p>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={loading}>
          Tutup
        </Button>
        <Button variant="danger" onClick={handleDelete} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Hapus'}
        </Button>
        <Button variant="success" onClick={handleSubmit} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Selesaikan'}
        </Button>
      </Modal.Footer>
      <Toast
        show={showSubmitToast}
        onClose={() => setShowSubmitToast(false)}
        delay={3000}
        autohide
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Notifikasi</strong>
        </Toast.Header>
        <Toast.Body>Laporan berhasil disubmit!</Toast.Body>
      </Toast>
      <Toast
        show={showDeleteToast}
        onClose={() => setShowDeleteToast(false)}
        delay={3000}
        autohide
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Notifikasi</strong>
        </Toast.Header>
        <Toast.Body>Laporan berhasil dihapus!</Toast.Body>
      </Toast>
    </Modal>
  );
}

export default ReviewLaporanModal;
