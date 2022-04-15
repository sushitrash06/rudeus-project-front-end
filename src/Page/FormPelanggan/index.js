import {
    Dialog,
    DialogContent,
    Typography,
  } from "@mui/material";
  import { Formik } from "formik";
  import React, { useEffect, useState } from "react";
  import Gap from "../../Component/gap";
  import  Input  from "../../Component/input";
  import Button from "../../Component/button";
  // import { styled } from "@mui/material/styles";
  // import TableCell, { tableCellClasses } from "@mui/material/TableCell";
  // import TableRow from "@mui/material/TableRow";
import { addStockOpname, getStockOpname } from "../../Config/Redux/action";
import { useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
  
  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: "#828282",
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));
  
  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   // hide last border
  //   "&:last-child td, &:last-child th": {
  //     border: 0,
  //   },
  // }));
  // const useForceUpdate = () => useState()[1];
  function FormPelanggan(props) {
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
            alamat:dataDetailOffice?.alamat,
            email:dataDetailOffice?.email,
            id: dataDetailOffice?.id,
            kuantitas: dataDetailOffice?.kuantitas,
            nama_pelanggan:dataDetailOffice?.nama_pelanggan,
            no_hp: dataDetailOffice?.no_hp,
            tanggal_join: dataDetailOffice?.tanggal_join,
            total_kunjungan: dataDetailOffice?.total_kunjungan,
            total_pembelian: dataDetailOffice?.total_pembelian
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
                      Nama Pelanggan
                    </Typography>
                   <Input
                      value={values.nama_pelanggan}
                      onChange={handleChange("nama_pelanggan")}
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
                      email
                    </Typography>
                   <Input
                      value={values.email}
                      onChange={handleChange("email")}
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
                      No Hp
                    </Typography>
                   <Input
                      value={values.no_hp}
                      onChange={handleChange("no_hp")}
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
                      Alamat
                    </Typography>
                   <Input
                      value={values.alamat}
                      onChange={handleChange("alamat")}
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
                      kuantitas
                    </Typography>
                   <Input
                      value={values.kuantitas}
                      onChange={handleChange("kuantitas")}
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
                     Total Kunjungan
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.total_kunjungan}
                      onChange={handleChange("total_kunjungan")}
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
                     Total Pembelian
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.total_pembelian}
                      onChange={handleChange("total_pembelian")}
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
  
  export default FormPelanggan;
  