import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import { Line } from "react-chartjs-2";
import Gap from "../../Component/gap";
import Button from "../../Component/button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import {
  getDashboardBiaya,
  getDashboardBiayaPembelian,
  getDashboardJumlahCustomer,
  getDashboardJumlahProduct,
  getDashboardJumlahSupplier,
  getDashboardKeuntungan,
  getDashboardPembelian,
  getDashboardPendapatan,
  getDashboardStockOffice,
  getDashboardPenjualan,
  getDashboardStockStore,
} from "../../Config/Redux/action";
import { useDispatch, useSelector } from "react-redux";

const data = {
  labels: [
    "15-Jan",
    "15-Feb",
    "15-Mar",
    "15-Apr",
    "15-May",
    "15-Jun",
    "15-Jul",
    "15-Aug",
    "15-Sep",
    "15-Oct",
    "15-Nov",
    "15-Dec",
  ],
  datasets: [
    {
      label: "Penjualan",
      fill: false,
      lineTension: 0,
      backgroundColor: "#2142C4",
      borderColor: "#2142C4",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#2142C4",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#2142C4",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200],
    },
    {
      label: "Pembelian",
      fill: false,
      lineTension: 0,
      backgroundColor: "#E1730B",
      borderColor: "#E1730B",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#E1730B",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#E1730B",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
    },
  ],
};

const options = {
  responsive: true,
  title: {
    display: true,
    text: "Statistik Penjualan Dan Pembelian",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "bottom",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: function (value, index, values) {
            return value + "K";
          },
        },
      },
    ],
  },
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Dashboard(props) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(null);
  const [isForcePickerOpen, setIsOpen] = React.useState(false);
  const Biaya = useSelector((state) => state.reducer.getDashboardBiaya.data);
  const BiayaPembelian = useSelector(
    (state) => state.reducer.getDashboardBiayaPembelian.data
  );
  const JumlahCustomer = useSelector(
    (state) => state.reducer.getDashboardJumlahCustomer.data
  );
  const JumlahProduct = useSelector(
    (state) => state.reducer.getDashboardJumlahProduct.data
  );
  const JumlahSupplier = useSelector(
    (state) => state.reducer.getDashboardJumlahSupplier.data
  );
  const Keuntungan = useSelector(
    (state) => state.reducer.getDashboardKeuntungan.data
  );
  const Pembelian = useSelector(
    (state) => state.reducer.getDashboardPembelian.data
  );
  const Pendapatan = useSelector(
    (state) => state.reducer.getDashboardPendapatan.data
  );
  const Penjualan = useSelector(
    (state) => state.reducer.getDashboardPenjualan.data
  );
  const StockOffice = useSelector(
    (state) => state.reducer.getDashboardStockOffice.data
  );
  const StockStoreiaya = useSelector(
    (state) => state.reducer.getDashboardStockStore.data
  );
  const createdDate = new Date(value);
  useEffect(() => {
    dispatch(getDashboardBiaya());
    dispatch(getDashboardBiayaPembelian());
    dispatch(getDashboardJumlahCustomer());
    dispatch(getDashboardJumlahProduct());
    dispatch(getDashboardJumlahSupplier());
    dispatch(getDashboardKeuntungan());
    dispatch(getDashboardPembelian());
    dispatch(getDashboardPenjualan());
    dispatch(getDashboardStockOffice());
    dispatch(getDashboardStockStore());
    dispatch(getDashboardPendapatan());
  }, []);
  
  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Dashboard</h1>
        <div style={{ display: "flex" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              open={isForcePickerOpen}
              onClose={() => setIsOpen(false)}
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={({ params, inputRef, inputProps, InputProps }) => (
                <Box>
                  <input
                    ref={inputRef}
                    {...inputProps}
                    style={{ display: "none" }}
                  />
                  <Button
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                    style={{
                      background: "rgb(81 94 193)",
                      color: "white",
                      textTransform: "capitalize",
                      marginRight: "15px",
                    }}
                    label={createdDate.toLocaleDateString("id-ID")}
                    endIcon={<Icon icon="dashicons:calendar-alt" />}
                  />
                </Box>
              )}
            />
          </LocalizationProvider>
          <div>
            <Button
              label="Download"
              style={{
                width: "100%",
                background: "#658a5c",
                color: "white",
                textTransform: "capitalize",
              }}
              endIcon={<Icon icon="bytesize:download" />}
            />
          </div>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <div style={{ position: "relative", padding: "1em" }}>
                <h2 style={{ marginRight: "50%" }}>Rangkuman Penjualan</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  align="center"
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="ps:sale-tag"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Total Penjualan</Typography>
                        <Typography fontSize={20}>{Penjualan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="fa-solid:hand-holding-usd"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Biaya</Typography>
                        <Typography fontSize={20}>{Biaya.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="healthicons:money-bag"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Pendapatan</Typography>
                        <Typography fontSize={20}>Rp {Pendapatan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="ant-design:line-chart-outlined"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Keuntungan</Typography>
                        <Typography fontSize={20}>Rp {Keuntungan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div style={{ position: "relative", padding: "1em" }}>
                <h2 style={{ marginRight: "50%" }}>Rangkuman Pembelian</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  align="center"
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="ant-design:shopping-filled"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Total Pembelian</Typography>
                        <Typography fontSize={20}>{Pembelian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="fa-solid:hand-holding-usd"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Biaya</Typography>
                        <Typography fontSize={20}>Rp {BiayaPembelian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="ri:refund-2-line"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Penukaran</Typography>
                        <Typography fontSize={20}>300</Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Icon
                        icon="fluent:box-dismiss-24-regular"
                        style={{
                          fontSize: "50px",
                          marginBottom: "25px",
                          color: "rgb(81 94 193)",
                        }}
                      />{" "}
                      <div align="left">
                        <Typography fontSize={15}>Pembatalan</Typography>
                        <Typography fontSize={20}>45</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div style={{ position: "relative", padding: "1em" }}>
                <h2 style={{ marginRight: "70%" }}>Detail Produk</h2>
                <div style={{ width: "80%", margin: "auto" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Icon
                      icon="fluent:box-dismiss-24-regular"
                      style={{
                        fontSize: "50px",
                        marginBottom: "15px",
                        color: "rgb(81 94 193)",
                      }}
                    />{" "}
                    <div align="left">
                      <Typography fontSize={20}>{JumlahProduct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Icon
                      icon="fe:list-task"
                      style={{
                        fontSize: "50px",
                        marginBottom: "15px",
                        color: "rgb(81 94 193)",
                      }}
                    />{" "}
                    <div align="left">
                      <Typography fontSize={20}>Rp {Pendapatan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Icon
                      icon="fluent:box-edit-24-filled"
                      style={{
                        fontSize: "50px",
                        marginBottom: "15px",
                        color: "rgb(81 94 193)",
                      }}
                    />{" "}
                    <div align="left">
                      <Typography fontSize={20}>{Pembelian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h2 style={{ marginRight: "70%" }}>Pengguna</h2>
              <div style={{ position: "relative", padding: "4.5em" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  align="center"
                >
                  <div style={{ display: "flex", marginRight: "15px" }}>
                    <Icon
                      icon="el:group"
                      style={{
                        fontSize: "70px",
                        marginRight: "10px",
                        marginBottom: "25px",
                        color: "rgb(81 94 193)",
                      }}
                    />
                    <div align="left">
                      <Typography fontSize={15}>Costumers</Typography>
                      <Typography fontSize={50}>{JumlahCustomer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Icon
                      icon="fa-solid:people-carry"
                      style={{
                        fontSize: "70px",
                        marginRight: "10px",
                        marginBottom: "25px",
                        color: "rgb(81 94 193)",
                      }}
                    />
                    <Typography fontSize={15}>Supplier</Typography>{" "}
                    <div align="left">
                      <Typography fontSize={50}>{JumlahSupplier.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Gap height={25} />
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          <Grid item xs={12}>
            <Item>
              <Typography>Statistik Penjualan Dan Pembelian</Typography>
              <Line data={data} options={options} height={50} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
