import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Button, Form, Alert, Toast } from 'react-bootstrap';

const Editpengumumanmodal = ({ show, handleClose, index }) => {
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [deletePengSuccess, setdeletePengSuccess] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [data, setData] = useState();
  const [judul, setJudul] = useState();
  const [desc, setDesc] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    setJudul(index?.judulPengumuman);
    setDesc(index?.deskripsiPengumuman);
  }, [data]);

  const handleEditPeng = async () => {
    setLoadingEdit(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman/${index?.id}`,
        {
          judulPengumuman: judul,
          deskripsiPengumuman: desc,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setToastMessage('Pengumuman berhasil diubah.');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        handleClose();
      }, 3000);
      window.location.reload()
    } catch (error) {
      console.log(error);
      setToastMessage('Gagal mengubah pengumuman. Silakan coba lagi.');
      setShowToast(true);
    } finally {
      setLoadingEdit(false);
    }
  };

  const handleDeletePenghuni = async () => {
    setLoadingDelete(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman/${index?.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setToastMessage('Pengumuman berhasil dihapus.');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        handleClose();
      }, 3000);
      window.location.reload()
    } catch (error) {
      console.log(error);
      setToastMessage('Gagal menghapus pengumuman. Silakan coba lagi.');
      setShowToast(true);
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Detail Penghuni</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNama">
            <Form.Label>Jenis pengumuman</Form.Label>
            <Form.Control
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNomorKamar">
            <Form.Label>Deskripsi Pengumuman</Form.Label>
            <Form.Control
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="warning" onClick={() => handleEditPeng()} disabled={loadingEdit}>
          {loadingEdit ? 'Menyimpan...' : 'Edit'}
        </Button>
        <Button variant="danger" onClick={() => handleDeletePenghuni()} disabled={loadingDelete}>
          {loadingDelete ? 'Menghapus...' : 'Hapus Pengumuman'}
        </Button>
      </Modal.Footer>

      {/* Toast */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={5000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </Modal>
  );
};

export default Editpengumumanmodal;
