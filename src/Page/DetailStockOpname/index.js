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
  import  Input  from "../../Component/input";
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
    const dataDetailOffice = detailProps.data;
    console.log(dataDetailOffice,'data detail')
    const [detailDisable, setDetailDisable] = React.useState(true)
    const history = useHistory();
    const loginForm = (
      <Formik
        initialValues={{
          article: dataDetailOffice.artikel,
          tipe: dataDetailOffice.tipe,
          kategori: dataDetailOffice.kategori,
          namaBarang: dataDetailOffice.nama_barang,
          kuantitas: dataDetailOffice.kuantitas,
          ukuran: dataDetailOffice.ukuran,
          kuantitas_keluar: dataDetailOffice.kuantitas_keluar,
          kuantitas_masuk: dataDetailOffice.kuantitas_masuk,
          stock: dataDetailOffice.stock,
          stock_opname: dataDetailOffice.stock_opname,
          Keterangan: dataDetailOffice.keterangan
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
                  <h2>Form Barang Masuk</h2>
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
                      Article
                    </Typography>
                   <Input
                      value={values.article}
                      onChange={handleChange("article")}
                      // label="Masukan "
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
                   <Input
                      value={values.tipe}
                      onChange={handleChange("tipe")}
                      // label="Masukan "
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
                      Kategori
                    </Typography>
                   <Input
                      value={values.kategori}
                      onChange={handleChange("kategori")}
                      // label="Masukan "
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
                      Nama Barang
                    </Typography>
                   <Input
                      value={values.namaBarang}
                      onChange={handleChange("namaBarang")}
                      // label="Masukan "
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
                     Kuantitas Masuk
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kuantitas_masuk}
                      onChange={handleChange("kuantitas_masuk")}
                      // label="Masukan "
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
                     Kuantitas Keluar
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kuantitas_keluar}
                      onChange={handleChange("kuantitas_keluar")}
                      // label="Masukan "
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
                      Stock
                    </Typography>
                   <Input
                      value={values.stock}
                      onChange={handleChange("stock")}
                      // label="Masukan "
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
                      Stock Opname
                    </Typography>
                   <Input
                      value={values.stock_opname}
                      onChange={handleChange("stock_opname")}
                      // label="Masukan "
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
                      Keterangan
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.Keterangan}
                      onChange={handleChange("Keterangan")}
                      // label="Masukan "
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
  
  export default FormPembelian;
  