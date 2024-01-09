import { useState } from 'react';
import { Container, Form, Button, Table, Spinner, Alert, Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchInv() {
  const [searchTerm, setSearchTerm] = useState('');
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function formatCurrency(number) {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber.replace(/IDR/g, 'Rp.');
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setLoading(true);

    try {
      const response = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/dp/${searchTerm}`, {
        headers: {
          Authorization: token,
        },
      });
      setInvoices(response.data.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setInvoices(null);
      setError('Nomor Invoice tidak ditemukan.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Cari Nomor Invoice</h1>

      <Card className="mb-4 p-4">
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="searchTerm" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Masukkan Nomor Invoice"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Cari
          </Button>
        </Form>
      </Card>

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {error ? (
            <Alert variant="danger" className="mt-4">
              {error}
            </Alert>
          ) : (
            <Card className="mt-4 p-4">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Nomor Invoice</th>
                    <th>Nama</th>
                    <th>Nomor Kamar</th>
                    <th>Status</th>
                    <th>Total Pembayaran</th>
                    <th>DP Yang Dibayarkan</th>
                    {invoices && invoices.status === 'acc' && (
                      <>
                        <th>Username</th>
                        <th>Password</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {invoices ? (
                    <tr>
                      <td>{invoices.nomorInvoice}</td>
                      <td>{invoices.nama}</td>
                      <td>{invoices.noKamar}</td>
                      <td>
                        {invoices.status === 'acc' && (
                          <Badge bg="success">Acc</Badge>
                        )}
                        {invoices.status === 'pending' && (
                          <Badge bg="warning">Pending</Badge>
                        )}
                        {invoices.status === 'decline' && (
                          <Badge bg="danger">Decline</Badge>
                        )}
                      </td>
                      <td>{formatCurrency(invoices.totalSewa)}</td>
                      <td>{formatCurrency(invoices.totalDP)}</td>
                      {invoices.status === 'acc' && (
                        <>
                          <td>pghn_{invoices.noKamar}</td>
                          <td>pass_{invoices.noKamar}</td>
                        </>
                      )}
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan="6">Data tidak ditemukan</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          )}
        </>
      )}

      <div className="text-center mt-4">
        <Link to="/">Kembali ke Halaman Utama</Link>
      </div>
    </Container>
  );
}

export default SearchInv;
