import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import ReactImageZoom from 'react-image-zoom';
import { useNavigate } from "react-router-dom";

function ReviewBuktiPembayaranModal({ show, handleClose, idinvoice }) {
  const [sewa, setSewa] = useState(false);
  const [dataSewa, setDatasewa] = useState();
  const [dataDp, setDataDp] = useState();
  const [id, setID] = useState();
  const nav = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        // Fetch sewa data
        const sewaResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/inv/${idinvoice}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setSewa(true);
        setDatasewa(sewaResponse.data.data);
      } catch (error) {
        // If fetching sewa data fails, fetch dp data
        try {
          const dpResponse = await axios.get(
            `https://be-skripsi-6v25wnffuq-uc.a.run.app/dp/${idinvoice}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setSewa(false);
          setDataDp(dpResponse.data.data);
        } catch (dpError) {
          console.error('Error fetching DP data:', dpError);
        }
      }
    };

    fetchData();
  }, [idinvoice]);

  const handleApprove = async () => {
    const token = localStorage.getItem('token')
    if (sewa) {
      const sewaResponse = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/inv/acc/${idinvoice.substring(4)}`,
        null,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(sewaResponse)
    }else{
      const sewaResponse = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/dp/acc/${idinvoice}`,
        null
        ,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(sewaResponse)
    }
    handleClose();
  };
  const labelStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const infoContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  };
  
  const handleDecline = () => {

    
    handleClose();
  };
  function formatCurrency(number) {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber.replace(/IDR/g, 'Rp.');
  }

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Review Bukti Pembayaran</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {sewa ? (
          dataSewa ? (
          <Form>
              <Form.Group controlId="kategori">
                <Form.Label style={labelStyle}>Nomor invoice</Form.Label>
                <Form.Control type="text" value={dataSewa.nomorInvoice} readOnly />
              </Form.Group>

              <Form.Group controlId="bukti">
                <Form.Label style={labelStyle}>Bukti Pembayaran Sewa</Form.Label>

                <div style={infoContainerStyle}>
                  <div>
                    <h5>Nama:</h5>
                    <p>{dataSewa.nama}</p>
                  </div>

                  <div>
                    <h5>Kamar:</h5>
                    <p>{dataSewa.Penghuni?.noKamar}</p>
                  </div>

                  <div>
                    <h5>Jumlah:</h5>
                    <p>{formatCurrency(dataSewa.Penghuni?.BiayaSewaBulanan)}</p>
                  </div>
                </div>

                <ReactImageZoom
                  {...{
                    width: 300,
                    height: 300,
                    zoomWidth: 300,
                    img: dataSewa.gambar,
                    zoomPosition: 'original',
                  }}
                />
              </Form.Group>
          </Form>

          ) : (
            <p>Loading...</p>
          )
        ) : (
          dataDp ? (
            <Form>
              <Form.Group controlId="kategori">
                <Form.Label style={labelStyle}>Nomor Invoice</Form.Label>
                <Form.Control type="text" value={dataDp.nomorInvoice} readOnly />
              </Form.Group>

              <Form.Group controlId="bukti">
                <Form.Label style={labelStyle}>Bukti Pembayaran Sewa</Form.Label>

                <div style={infoContainerStyle}>
                  <div>
                    <h5>Nama:</h5>
                    <p>{dataDp.nama}</p>
                  </div>

                  <div>
                    <h5>Kamar:</h5>
                    <p>{dataDp.noKamar}</p>
                  </div>

                  <div>
                    <h5>Jumlah sewa:</h5>
                    <p>{formatCurrency(dataDp.totalSewa)}</p>
                  </div>
                  <div>
                    <h5>Jumlah dp:</h5>
                    <p>{formatCurrency(dataDp.totalDP)}</p>
                  </div>
                </div>

                <ReactImageZoom
                  {...{
                    width: 300,
                    height: 300,
                    zoomWidth: 300,
                    img: dataDp.gambar,
                    zoomPosition: 'original',
                  }}
                />
              </Form.Group>
          </Form>
          ) : (
            nav('/')
          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleApprove}>
          Approve
        </Button>
        <Button variant="danger" onClick={handleDecline}>
          Decline
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
}

export default ReviewBuktiPembayaranModal;