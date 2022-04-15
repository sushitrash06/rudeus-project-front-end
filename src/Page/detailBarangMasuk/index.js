import {
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect,useState } from "react";
import Gap from "../../Component/gap";
import Input from "../../Component/input";
import Button from "../../Component/button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from "react-redux";
import { addStockOpname, getPenyimpananMasuk } from "../../Config/Redux/action";

function FormPembelian(props) {
  const dispatch = useDispatch()
  const dataDetailOffice = props?.data;
  const [detailDisable, setDetailDisable] = React.useState(true)
  const [openModals, setOpenModals] = useState(false)
  const [error, setError] = useState(false)
  console.log(dataDetailOffice)
  useEffect(() => {
    if (dataDetailOffice === undefined) {
      setDetailDisable(false)
      console.log("yes")
    } else {
      setDetailDisable(true)
    }
  }, [dataDetailOffice])
  const loginForm = (
    <Formik
      initialValues={{
        article: dataDetailOffice?.artikel,
        tipe: dataDetailOffice?.type,
        kategori: dataDetailOffice?.kategori,
        namaBarang: dataDetailOffice?.nama_barang,
        kuantitas: dataDetailOffice?.kuantitas,
        ukuran: dataDetailOffice?.ukuran,
        fotoBarang: dataDetailOffice?.image,
        hpp: dataDetailOffice?.hpp,
        hargaJual: dataDetailOffice?.harga_jual,
        Keterangan: dataDetailOffice?.keterangan,
        Tanggal_masuk : dataDetailOffice?.tanggal_masuk,
        id: dataDetailOffice?.id
      }}
      enableReinitialize={true}
      validate={(values) => {
        const errors = {};
        if (!values.article) {
          errors.article = "Harap Di isi";
        }
        if (!values.tipe) {
          errors.tipe = "Harap Di isi";
        }
        if (!values.hargaJual) {
          errors.hargaJual = "Harap Di isi";
        }
        if (!values.kategori) {
          errors.kategori = "Harap Di isi";
        }
        if (!values.namaBarang) {
          errors.namaBarang = "Harap Di isi";
        }
        if (!values.kuantitas) {
          errors.kuantitas = "Harap Di isi";
        }
        if (!values.ukuran) {
          errors.ukuran = "Harap Di isi";
        }
        if (!values.hpp) {
          errors.hpp = "Harap Di isi";
        }
        if (!values.Keterangan) {
          errors.Keterangan = "Harap Di isi";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        let formData = new FormData();    //formdata object

        formData.append('artikel', values.article);   //append the values with key, value pair
        formData.append('harga_jual', values.hargaJual);  //append the values with key, value pair
        formData.append('hpp', values.hpp);
        formData.append('kategori', values.kategori);   //append the values with key, value pair
        formData.append('keterangan', values.Keterangan);
        formData.append('kuantitas', values.kuantitas);   //append the values with key, value pair
        formData.append('nama_barang', values.namaBarang);
        formData.append('nama_kategori', values.kategori);
        formData.append('type', values.tipe);
        formData.append('type_name', values.tipe);
        formData.append('ukuran', values.ukuran);
        formData.append('tanggal_masuk', values.Tanggal_masuk);
        formData.append('id',values.id)
        console.log(formData)
        
        
        if (dataDetailOffice === undefined){
          const resp = await dispatch(addStockOpname('add',formData))
          if (resp.type === "POST_STOCK_OPNAME_SUCCESSS") {
            props.onClose()
            dispatch(getPenyimpananMasuk())
            setError(false)
            setOpenModals(true)
          } else {
            setError(true)
            setOpenModals(true)
          }
        }else{
          const resp = await dispatch(addStockOpname('update',formData))
          if(resp.type === "POST_STOCK_OPNAME_SUCCESSS"){
            props.onClose()
            dispatch(getPenyimpananMasuk())
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
                  width: "600px",
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
                    error={errors.article}
                    helperText={errors.article}
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
                  <div style={dataDetailOffice === undefined || detailDisable === false ? {display:"none"}:{
                  }}>
                     <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#717171",
                    }}
                  >
                    Tanggal Masuk
                  </Typography>
                  <Input
                    error={errors.Tanggal_masuk}
                    helperText={errors.Tanggal_masuk}

                    value={values.Tanggal_masuk}
                    onChange={handleChange("Tanggal_masuk")}
                    // label="Masukan "
                    disable={true}
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      //   background: '#4C4E5B',
                    }}
                  />
                  </div>
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
                    error={errors.tipe}
                    helperText={errors.tipe}

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
                    error={errors.kategori}
                    helperText={errors.kategori}
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
                    error={errors.namaBarang}
                    helperText={errors.namaBarang}
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
                    Kuantitas
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    error={errors.kuantitas}
                    helperText={errors.kuantitas}
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
                    Ukuran
                  </Typography>
                  <Input
                    error={errors.ukuran}
                    helperText={errors.ukuran}
                    value={values.ukuran}
                    onChange={handleChange("ukuran")}
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
                    HPP
                  </Typography>
                  <Input
                    error={errors.hpp}
                    helperText={errors.hpp}
                    value={values.hpp}
                    onChange={handleChange("hpp")}
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
                    Harga Jual
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    error={errors.hargaJual}
                    helperText={errors.hargaJual}
                    value={values.hargaJual}
                    onChange={handleChange("hargaJual")}
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
                    error={errors.Keterangan}
                    helperText={errors.Keterangan}
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
                    detailDisable === true ? { display: 'none' } :
                      {}}>
                    <Button
                      onClick={handleSubmit}
                      label="Submit"
                      style={
                        detailDisable === true ? { display: 'none' } :
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
                    detailDisable === true ? { display: 'none' } :
                      {}}>
                    <Button
                      onClick={() => {
                        setDetailDisable(true)
                      }}
                      label="Kembali"
                      style={
                        detailDisable === true ? { display: 'none' } :
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
                    detailDisable === false ? { display: 'none' } :
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
            {error === false ? 'Data Penyimpanan Barang Masuk Tersimpan' : 'Tambah Penyimpanan Barang Gagal'}
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
