
import { Modal, Button, Form } from 'react-bootstrap';

const EditDetailPenghuniModal = ({ show, handleClose, index, handleEditPenghuni }) => {
//   const [editedPenghuni, setEditedPenghuni] = useState({
//     nama: penghuni.nama,
//     nomorKamar: penghuni.nomorKamar,
//     nomorHP: penghuni.hp,
//     username: penghuni.username,
//   });
console.log(index)

  const handleResetPassword = () => {
    // Lakukan operasi reset password (misalnya, kirim ke server)
    // ...
    alert('Password direset!');
  };

  const handleEditDetailPenghuni = () => {
    // Lakukan operasi edit detail penghuni (misalnya, kirim ke server)
    // ...
    
    // Setelah operasi edit, tutup modal
    handleClose();
  };

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
            //   value={editedPenghuni.nama}
            //   onChange={(e) => setEditedPenghuni({ ...editedPenghuni, nama: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formNomorKamar">
            <Form.Label>Nomor Kamar</Form.Label>
            <Form.Control
              type="text"
            //   value={editedPenghuni.nomorKamar}
            //   onChange={(e) => setEditedPenghuni({ ...editedPenghuni, nomorKamar: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formNomorHP">
            <Form.Label>Nomor HP</Form.Label>
            <Form.Control
              type="text"
            //   value={editedPenghuni.nomorHP}
            //   onChange={(e) => setEditedPenghuni({ ...editedPenghuni, nomorHP: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
            //   value={editedPenghuni.username}
            //   onChange={(e) => setEditedPenghuni({ ...editedPenghuni, username: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleEditDetailPenghuni}>
          Simpan Perubahan
        </Button>
        <Button variant="danger" onClick={handleResetPassword}>
          Reset Password
        </Button>
        <Button variant="danger" >
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDetailPenghuniModal;
