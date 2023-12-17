
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
const Editpengumumanmodal = ({ show, handleClose, index, }) => {
    
 
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [deletePengSuccess, setdeletePengSuccess] = useState(false);
  const [data,setData] = useState()
  const [judul,setJudul] = useState()
  const [desc,setDesc] = useState()

  useEffect(()=>{
    setJudul(index?.judulPengumuman)
    setDesc(index?.deskripsiPengumuman)
  },[data])

  const handleEditPeng = async() =>{
    try {
        const token = localStorage.getItem('token')
        const response = await axios.put(
            `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman/${index?.id}`,
            {
                judulPengumuman : judul,
                deskripsiPengumuman : desc
            }
            ,  // Request body set to null for a POST request
            {
              headers: {
                Authorization: token,
              },
            }
          );
          alert('berhasil edit')
          window.location.reload();
          handleClose()
    } catch (error) {
        console.log(error)
    }
  }

  // ...
//   const handleResetPassword = async () => {
//     try {
//       const token = localStorage.getItem('token')
//       const response = await axios.put(
//         `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/pass/${index?.id}`,
//         null,  // Request body diubah menjadi null karena method PUT tidak memerlukan body
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setResetPasswordSuccess(true);
//       setTimeout(() => {
//         setResetPasswordSuccess(false);
//         handleClose()
//       }, 3000);
      
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
//   const handleDeletePenghuni = async () => {
//     try {
//       const token = localStorage.getItem('token')
//       const response = await axios.delete(
//         `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${index?.id}`,  // Request body diubah menjadi null karena method PUT tidak memerlukan body
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setdeletePengSuccess(true);
//       setTimeout(() => {
//         setdeletePengSuccess(false);
//         handleClose()
//       }, 3000);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
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
        { <Button variant="warning" onClick={() => handleEditPeng()}>
          Edit
        </Button>
       /*<Button variant="danger" onClick={() => handleDeletePenghuni()}>
          Hapus Penghuni
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default Editpengumumanmodal;