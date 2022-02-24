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
import React, { useEffect, useState } from "react";
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
import Paper from "@mui/material/Paper";
import data from "../../Component/table/dummyData.json";
import { getDetailPesanan } from "../../Config/Redux/action";
import { useDispatch, useSelector } from "react-redux";


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

function DetailPenjualanStore(props) {
  const dispatch = useDispatch()
  const detailTable = useSelector((state)=> state.reducer.getDetailPesanan.data)
  const propsData = props;
  const detail = props.data;
  const id = props.data?.id_transaksi;
  const [dataDetail, setDataDetail] = useState(data[0]);
  useEffect(()=>{
      dispatch(getDetailPesanan(`id_transaksi=${id}`))
  },[])
  // console.log(detail,'detail');
  const [dataTable, setDataTable] = useState(dataDetail.detailPenjualan);

  const history = useHistory();
  const loginForm = (
    <Formik
      initialValues={{
         kodeTransaksi: detail.id_transaksi,
        kodeStore: detail.id_store,
        lokasiStore: detail.lokasi_store,
        diskon: detail.diskon,
        metodePembayaran: detail.metode_bayar,
        ekspedisi: detail.ekspedisi,
        ongkir: detail.ongkir,
        total: detail.total,
        kembalian: detail.kembalian,
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
          maxWidth={25}
        >
          <DialogContent
            style={{
              width: "100%",
            }}
          >
            <div>
              <div
                style={{
                  // width:"500px",
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
                    Kode Transaksi
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.kodeTransaksi}
                    onChange={handleChange("kodeTransaksi")}
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
                    Kode Store
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.kodeStore}
                    onChange={handleChange("kodeStore")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Lokasi Store
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.lokasiStore}
                    onChange={handleChange("lokasiStore")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Detail Pesanan
                  </Typography>
                  <Gap height="10px" />
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>No</StyledTableCell>
                          <StyledTableCell align="left">
                            Item Pesanan
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Kuantitas
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Total Harga
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {detail?.detailPesananList && detail?.detailPesananList.map((row) => {
                          return (
                            <StyledTableRow key={row.id}>
                              <StyledTableCell component="th" scope="row">
                                {row.id}
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                style={{
                                  display: "flow",
                                }}
                              >
                                <div>
                                  {row.nama_barang}
                                  <br />
                                  Rp {row.harga}
                                </div>
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.kuantitas}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                Rp {row.kuantitas * row.harga}
                              </StyledTableCell>
                            </StyledTableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Gap height={25} />
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#717171",
                    }}
                  >
                    Diskon
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.diskon}
                    onChange={handleChange("diskon")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Metode Pembayaran
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.metodePembayaran}
                    onChange={handleChange("metodePembayaran")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Ekspedisi
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.ekspedisi}
                    onChange={handleChange("ekspedisi")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Ongkir
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.ongkir}
                    onChange={handleChange("ongkir")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
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
                    Total Keseluruhan
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.total}
                    onChange={handleChange("total")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      //   background: '#4C4E5B',
                    }}
                  />
                  <Gap height="10px" />
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#717171",
                    }}
                  >
                    Kembalian
                  </Typography>
                  <Gap height="10px" />
                  <Input
                    disable={true}
                    value={values.kembalian}
                    onChange={handleChange("kembalian")}
                    // label="Masukan "
                    // inputProps={{ className: classes.input }}
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      //   background: '#4C4E5B',
                    }}
                  />
                  <Gap height={35} />
                  <Button
                    onClick={() => {
                      props.onClose();
                    }}
                    label="Kembali"
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

export default DetailPenjualanStore;
