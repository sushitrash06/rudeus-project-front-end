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
import { addStockOpname, getStockOpname } from "../../Config/Redux/action";
import { useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
  
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
    const dispatch = useDispatch()
    const dataDetailOffice = props?.data;
    console.log(dataDetailOffice,'data detail')
    const [detailDisable, setDetailDisable] = React.useState(true)
    const [openModals, setOpenModals] = useState(false)
    const [error, setError] = useState(false)
    useEffect(()=>{
      if(dataDetailOffice === undefined){
        setDetailDisable(false)
        console.log("tew")
      }else{
        setDetailDisable(true)
        console.log("yaw")
      }
    },[dataDetailOffice])
    const handleDetailDisable =()=>{
      setDetailDisable(true)
    }
    const loginForm = (
      <Formik
        initialValues={{
          article: dataDetailOffice?.artikel,
          tipe: dataDetailOffice?.type,
          kategori: dataDetailOffice?.kategori,
          namaBarang: dataDetailOffice?.nama_barang,
          kuantitas: dataDetailOffice?.kuantitas,
          ukuran: dataDetailOffice?.ukuran,
          kuantitas_keluar: dataDetailOffice?.kuantitas_keluar,
          kuantitas_masuk: dataDetailOffice?.kuantitas_masuk,
          stock: dataDetailOffice?.stock,
          stock_opname: dataDetailOffice?.stock_opname,
          Keterangan: dataDetailOffice?.keterangan,
          sku_code: dataDetailOffice?.sku_code,
          id:dataDetailOffice?.id
        }}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          // if (!values.username) {
          //   errors.user = "Silahkan Masukan Username";
          // }
          // if (!values.password) {
          //   errors.password = "Silahkan Masukan Kata Sandi";
          // }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const formData = new FormData
          formData.append('artikel', values.article);   //append the values with key, value pair
          formData.append('kategori ', values.kategori);  //append the values with key, value pair
          formData.append('nama_barang ', values.namaBarang);
          formData.append('nama_kategori ', values.kategori);   //append the values with key, value pair
          formData.append('sku_code', values.sku_code);
          formData.append('stock_opname', values.stock_opname);   //append the values with key, value pair
          formData.append('type', values.tipe);
          formData.append('type_name', values.tipe);
          formData.append('id',values.id)
          if (dataDetailOffice === undefined){
            const resp = await dispatch(addStockOpname('add',formData))
            if (resp.type === "POST_STOCK_OPNAME_SUCCESSS") {
              props.onClose()
              dispatch(getStockOpname())
              setError(false)
              setOpenModals(true)
              detailDisable(true)
            } else {
              setError(true)
              setOpenModals(true)
              detailDisable(true)
            }
          }else{
            const resp = await dispatch(addStockOpname('update',formData))
            if(resp.type === "POST_STOCK_OPNAME_SUCCESSS"){
              props.onClose()
              dispatch(getStockOpname())
              setError(false)
              setOpenModals(true)
            }else{
              setError(true)
              setOpenModals(true)
            }
          }
                  
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
                  <h2>Form Stock Opname</h2>
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
                      SKU Code
                    </Typography>
                   <Input
                      value={values.sku_code}
                      onChange={handleChange("sku_code")}
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
                    <div  style={
                        detailDisable === true ? {display:'none'} :
                        {}}>
                   <Button
                      onClick={handleSubmit}
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
                    <div style={
                        detailDisable === true ? {display:'none'} :
                        {}}>
                    <Button
                      onClick={()=>{
                        if(dataDetailOffice === undefined){
                          props.onClose()
                        }else{
                          setDetailDisable(true)
                        }
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
        <Dialog open={openModals} onClose={() => {
        setOpenModals(false)
      }}>
        <DialogContent
          style={{
            width: "100%",
            borderRadius:"15px"
          }}
        >
          <div align="center">
          {
            error === false ? (
              <>
                <CheckCircleIcon
                    style={{
                      color:"#1572A1",
                      fontSize:"50px"
                    }}
                />
              </>
              ):(
                  <>
                     <ErrorIcon style={{
                      color:"#FF5959",
                      fontSize:"50px"
                    }}/>
                </>
              )
          }
          <Typography>
            {error === false ? 'Data Penyimpanan Stock Opname Tersimpan' : 'Tambah Penyimpanan Barang Gagal'}
          </Typography>
          <Gap height={25}/>
          <Button
            onClick={() => {
              setOpenModals(false)
            }}
            label="Ok"
            style={{
              width: "100%",
              padding: "0.5em",
              background: "rgb(81 94 193)",
              borderRadius: "15px",
              color: "white",
              fontSize: "20px",
              textTransform: "capitalize",
              // padding:"1em"
            }}
          />
          </div>
        </DialogContent>
      </Dialog>
      </>
    );
  }
  
  export default FormPembelian;
  