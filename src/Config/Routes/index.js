import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router';
import { Login,Dashboard,DetailPenjualanStore } from '../../Page';
import PenjualanStore from '../../Component/table/PenjualanStore/index'
import PenjualanOffice from '../../Component/table/PenjualanOffice';
import FormPenjualanOffice from '../../Page/FormPenjualan';
import Pembelian from '../../Page/pembelian';
import BarangMasuk from '../../Page/penyimpaan/BarangMasuk';
import BarangKeluar from '../../Page/penyimpaan/BarangKeluar';
import StockOpname from '../../Page/penyimpaan/StockOpname';
import MasterKatgori from '../../Page/MasterKategori';
import MasterTipe from '../../Page/MasterTipe';
import MasterUkuran from '../../Page/MasterUkuran';
import Pelanggan from '../../Page/pelanggan';
import Karyawan from '../../Page/karyawan';
import Pemasok from '../../Page/pemasok';

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	const accessToken = localStorage.getItem("DMDSHBTOKEN");

// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				accessToken ? <Component {...props} /> : <Redirect to='/' />
// 			}
// 		/>
// 	);
// };


function Routes() {
  return (
    // <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/penjualan-store' component={PenjualanStore}/>
        <Route exact path='/penjualan-office' component={PenjualanOffice}/>
        <Route exact path='/penyimpanan/barang-masuk' component={BarangMasuk}/>
        <Route exact path='/penyimpanan/barang-keluar' component={BarangKeluar}/>
        <Route exact path='/penyimpanan/stock-opname' component={StockOpname}/>
        <Route exact path='/pembelian' component={Pembelian}/>
        <Route exact path='/master/kategori' component={MasterKatgori}/>
        <Route exact path='/master/tipe' component={MasterTipe}/>
        <Route exact path='/master/ukuran' component={MasterUkuran}/>
        <Route exact path='/pelanggan' component={Pelanggan}/>
        <Route exact path='/karyawan' component={Karyawan}/>
        <Route exact path='/pemasok' component={Pemasok}/>
      </Switch>
  );
}

export default Routes;
