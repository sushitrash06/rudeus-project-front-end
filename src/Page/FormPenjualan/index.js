import {
    Checkbox,
    Dialog,
    DialogContent,
    FormControlLabel,
    FormGroup,
    TableFooter,
    Typography,
  } from "@mui/material";
  import { Formik } from "formik";
  import React, { useEffect, useRef, useState } from "react";
  import logo from "../../assets/logo.png";
  import Gap from "../../Component/gap";
  import Input  from "../../Component/input";
  import Button from "../../Component/button";
  import { useHistory } from 'react-router-dom';
  import { styled } from "@mui/material/styles";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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
  
  function FormPenjualanOffice(props) {
    const detailProps = props;
    const dataDetailOffice = detailProps.data;
    console.log(dataDetailOffice,'data detail')
    const history = useHistory();
    const [detailDisable, setDetailDisable] = React.useState(true)
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
          lokasiStore: dataDetailOffice.lokasi_office,
          article: dataDetailOffice.artikel,
          tipe: dataDetailOffice.tipe,
          kategori: dataDetailOffice.kategori,
          namaBarang: dataDetailOffice.nama_barang,
          kuantitas: dataDetailOffice.kuantitas,
          ukuran: dataDetailOffice.ukuran,
          fotoBarang: dataDetailOffice.foto_barang,
          metodePembayaran: dataDetailOffice.metode_pembayaran,
          hargaSatuanBarang: dataDetailOffice.harga_satuan_barang,
          ongkosKirim: dataDetailOffice.ongkos_kirim,
          PajakDanLainnya: dataDetailOffice.pajak_biaya,
          total: dataDetailOffice.total
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
                    width:"600px",
                    background: "#FFF",
                  }}
                >
                  <h2>Penjualan Store Detail</h2>
                  <div
                    align="left"
                    style={{
                      margin: "25px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Lokasi Office
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      disable={detailDisable}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        height: "100%",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Article
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.article}
                      onChange={handleChange("article")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Tipe
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.tipe}
                      onChange={handleChange("tipe")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Kategori
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kategori}
                      onChange={handleChange("kategori")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Nama Barang
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.namaBarang}
                      onChange={handleChange("namaBarang")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Kuantitas
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kuantitas}
                      onChange={handleChange("kuantitas")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Ukuran
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.ukuran}
                      onChange={handleChange("ukuran")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Foto Barang
                    </Typography>
                    <Gap height="10px" />
                    <div className="App">
                    <form onSubmit={onSubmit} style={detailDisable === true ? {
                      display:'none'
                    }:{display:'flex'}}>
                      <input
                        id="file"
                        type="file"
                        ref={fileInput}
                        // The onChange should trigger updates whenever
                        // the value changes?
                        // Try to select a file, then try selecting another one.
                        onChange={forceUpdate}
                        multiple

                      />
                      <label htmlFor="file">
                        <span tabIndex="0" role="button" aria-controls="filename">
                          Upload Foto Barang
                        </span>
                      </label>
                      {fileNames()}
                      <br />
                    </form>
                    <Gap height={25}/>
                  </div>
                    <img src={dataDetailOffice.foto_barang} alt="gambar"/>
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Metode Pembayaran
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.metodePembayaran}
                      onChange={handleChange("metodePembayaran")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Harga Satuan Barang
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.hargaSatuanBarang}
                      onChange={handleChange("hargaSatuanBarang")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Ongkos Kirim
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.ongkosKirim}
                      onChange={handleChange("ongkosKirim")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />{" "}
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Pajak dan Biaya Lainnya
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.PajakDanLainnya}
                      onChange={handleChange("PajakDanLainnya")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Harga Total
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.total}
                      onChange={handleChange("total")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      disable={detailDisable}
                      style={{
                                              width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={35} />
                    <div style={
                        detailDisable === true ? {display:'none'} :
                        {}}>
                    <Button
                      onClick={() => {
                        setDetailDisable(true)
                      }}
                      label="Kembali"
                      style={
                        detailDisable === true ? {display:'none'} :
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
                   <div  style={
                        detailDisable === true ? {display:'none'} :
                        {}}>
                   <Button
                      onClick={() => {
                        setDetailDisable(false)
                      }}
                      label="Submit"
                      style={
                        detailDisable === true ? {display:'none'} :
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
                    <div  style={
                        detailDisable === false ? {display:'none'} :
                        {}}>
                    <Button
                      onClick={() => {
                        setDetailDisable(false)
                      }}
                      label="Edit"
                      style={{
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
  
  export default FormPenjualanOffice;
  