import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Button from "../../Component/button";
import Input from "../../Component/button";
import rows from "../../ Component/table/dummyData.json";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
// import { Link, useHistory } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
// import FormPembelian from "../FormPembelian";

export default function BarangMasuk() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "TanggalTransaksi",
      headerName: "Tanggal Transaksi",
      width: 200,
      editable: true,
    },
    {
      field: "Artikel",
      headerName: "Artikel",
      width: 150,
      editable: true,
    },
    {
      field: "Kategori",
      headerName: "Kategori",
      width: 150,
      editable: true,
    },
    {
      field: "tipe",
      headerName: "Tipe",
      width: 150,
      editable: true,
    },
    {
      field: "NamaBarang",
      headerName: "Nama Barang",
      width: 150,
      editable: true,
    },
    {
      field: "Kualitas",
      headerName: "Kuantitas",
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 140,
    },
    {
      field: "ukuran",
      headerName: "Ukuran",
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 130,
    },
    {
        field: "Total",
        headerName: "HPP",
        // description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: 160,
      },
    {
      field: "keterangan",
      headerName: "Keterangan",
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: "Total",
      headerName: "Total",
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 140,
    },
    {
      field: "Action",
      headerName: "Action",
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
      renderCell: () => {
        return (
          <div style={{ display: "flex" }}>
            <Button
              style={{
                color: "black",
                textTransform: "capitalize",
              }}
              startIcon={<EditIcon />}
              onClick={() => {
                setOpenDetail(true);
              }}
            />
            <Button
              style={{
                color: "black",
                textTransform: "capitalize",
              }}
              startIcon={<RemoveRedEyeOutlinedIcon />}
              onClick={() => {
                setOpenDetail(true);
              }}
            />
          </div>
        );
      },
    },
  ];
  const [openDetail, setOpenDetail] = React.useState(false);
  return (
    <div style={{ marginTop: "50px" }} align="left">
      <div
        style={{
          margin: "25px",
          marginTop: "55px",
          display: "flex",
        }}
      >
        <h1>Penyimpanan Barang Masuk</h1>
        <div
          style={{
            position: "absolute",
            right: 0,
            display: "flex",   
          }}
        >
          <Button
            style={{
              background: "#E14C4C",
              color: "white",
              textTransform: "capitalize",
              marginRight: "15px",
              width: "100%",
              padding: "1em",
              borderRadius: "14px",
            }}
            label="Hapus"
            startIcon={<DeleteIcon />}
          />
          <Button
            style={{
              background: "rgb(81, 94, 193)",
              color: "white",
              textTransform: "capitalize",
              marginRight: "15px",
              width: "100%",
              padding: "1em",
              borderRadius: "14px",
            }}
            label="Tambah"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              setOpenDetail(true);
            }}
          />
          <Button
            style={{
              background: "#828EED",
              color: "white",
              textTransform: "capitalize",
              marginRight: "15px",
              width: "100%",
              padding: "1em",
              borderRadius: "14px",
            }}
            label="Upload"
            startIcon={<CloudUploadIcon />}
          />
        </div>
      </div>
      <div style={{ height: 700, width: "100%" }}>
        <div>
          <Input
            style={{
              borderRadius: "4px",
              marginBottom: "15px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
        {/* <FormPembelian
              open={openDetail}
              onClose={()=>{
                setOpenDetail(false)
              }}
            /> */}
      </div>
    </div>
  );
}
