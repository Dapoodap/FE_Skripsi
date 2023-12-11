import React from 'react'
import { Modal } from 'react-bootstrap'

function ModalEditLaporan({ show, handleClose, handleEdit })) {
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Pengumuman</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Form edit dapat ditambahkan di sini */}
      <p>Modal untuk pengeditan pengumuman</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Batal
      </Button>
      <Button variant="primary" onClick={handleEdit}>
        Simpan Perubahan
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalEditLaporan