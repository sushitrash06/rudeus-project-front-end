import {
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  FormGroup,
  Paper,
  TableFooter,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import Gap from "../../Component/gap";
import Input from "../../Component/input";
import Button from "../../Component/button";
import { useHistory } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#828282",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const useForceUpdate = () => useState()[1];
function FormPembelian(props) {
  const detailProps = props;
  const dataDetailOffice = detailProps?.data;
  const detailPembelian = props?.data?.detail_pembelian;
  console.log(dataDetailOffice, 'data detail')
  const [detailDisable, setDetailDisable] = React.useState(true)
  const [dataTable, setDataTable] = useState([])
  useEffect(() => {
    setDataTable(detailPembelian)
  }, [detailPembelian])
  console.log(dataTable, 'ini data tabel')
  const history = useHistory();
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();
  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(fileInput.current.files);
  }

  function fileNames() {
    const { current } = fileInput;

    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return null;
  }
  const loginForm = (
    <Formik
      initialValues={{
        article: dataDetailOffice.artikel,
        tipe: dataDetailOffice.tipe,
        kategori: dataDetailOffice.kategori,
        namaBarang: dataDetailOffice.nama_barang,
        kuantitas: dataDetailOffice.kuantitas,
        ukuran: dataDetailOffice.ukuran,
        fotoBarang: dataDetailOffice.image,
        hpp: dataDetailOffice.hpp,
        hargaJual: dataDetailOffice.harga_jual,
      }}
      enableReinitialize={true}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.user = "Silahkan Masukan Username";
        }
        if (!values.password) {
          errors.password = "Silahkan Masukan Kata Sandi";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        // history.push('/dashboard')
        const user = {
          user: values.username,
        };
        console.log("login");
        localStorage.setItem("rdprjt");
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          maxWidth="lg"
        >
          <DialogContent
            style={{
              width: "100%",
            }}
          >
            <div>
              <div
                style={{
                  minWidth:"600px",
                  maxWidth:"900px",
                  width: "850px",
                  background: "#FFF",
                }}
              >
                <h2>Detail pembelian</h2>
                <div
                  align="left"
                  style={{
                    margin: "25px",
                  }}
                >
                  <Typography style={{fontWeight:"bolder", fontSize:"20px"}}>Nama Supplier</Typography>
                  <Typography>{dataDetailOffice.nama_supplier}</Typography>
                  <Gap height={20}/>
                  <Typography style={{fontWeight:"bolder", fontSize:"20px"}}>Kode Pembelian</Typography>
                  <Typography>{dataDetailOffice.pembelian_code}</Typography>
                  <Gap height={20}/>
                  <Typography style={{fontWeight:"bolder", fontSize:"20px"}}>Tanggal Transaksi</Typography>
                  <Typography>{dataDetailOffice.tanggal_transaksi}</Typography>
                  <Gap height={25}/>
                  <Typography style={{fontWeight:"bolder", fontSize:"20px"}}>Detail Pembelian</Typography>
                  <Gap height={20}/>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>No</StyledTableCell>
                          <StyledTableCell align="left">
                            Item Pesanan
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Artikel
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Pembelian Kode
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Ukuran
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Total HPP
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dataDetailOffice?.detail_pembelian && dataDetailOffice?.detail_pembelian.map((row,index) => {
                          let number = index + 1
                          return (
                            <StyledTableRow key={row.id}>
                              <StyledTableCell component="th" scope="row">
                                {number}
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                style={{
                                  display: "flow",
                                }}
                              >
                                <div>
                                  Artikel : {row.artikel}
                                  <br />
                                  Nama Barang {row.nama_barang} ({row.kategori})
                                  <br/>
                                  Rp {row.hpp} x {row.kuantitas}
                                </div>
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.artikel}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.pembelian_code}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.ukuran}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                Rp {row.total_hpp}
                              </StyledTableCell>
                            </StyledTableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Gap height={35} />
                  <Button
                      onClick={
                        props.onClose
                      }
                      label="Kembali"
                      style={
                          {
                            width: "100%",
                            padding: "0.5em",
                            background: "rgb(81 94 193)",
                            borderRadius: "15px",
                            color: "white",
                            fontSize: "20px",
                            textTransform: "capitalize",
                            marginBottom: "25px",
                            // padding:"1em"
                          }}
                    />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Formik>
  );
  return (
    <>
      <div>{loginForm}</div>
    </>
  );
}

export default FormPembelian;
