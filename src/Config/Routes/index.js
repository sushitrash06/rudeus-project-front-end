import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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

const PrivateRoute = ({ component: Component, ...rest }) => {
	const accessToken = localStorage.getItem("rd-prjt");

	return (
		<Route
			{...rest}
			render={(props) =>
				accessToken ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

const RouteBefore = ({ component: Component, ...rest }) => {
	const accessToken = localStorage.getItem("rd-prjt");

	return (
		<Route
			{...rest}
			render={(props) =>
				!accessToken ? <Component {...props} /> : <Redirect to='/dashboard' />
			}
		/>
	);
};


function Routes() {
  return (
    // <Router>
      <Switch>
        <RouteBefore exact path='/' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/penjualan-store' component={PenjualanStore}/>
        <PrivateRoute exact path='/penjualan-office' component={PenjualanOffice}/>
        <PrivateRoute exact path='/penyimpanan/barang-masuk' component={BarangMasuk}/>
        <PrivateRoute exact path='/penyimpanan/barang-keluar' component={BarangKeluar}/>
        <PrivateRoute exact path='/penyimpanan/stock-opname' component={StockOpname}/>
        <PrivateRoute exact path='/pembelian' component={Pembelian}/>
        <PrivateRoute exact path='/master/kategori' component={MasterKatgori}/>
        <PrivateRoute exact path='/master/tipe' component={MasterTipe}/>
        <PrivateRoute exact path='/master/ukuran' component={MasterUkuran}/>
        <PrivateRoute exact path='/pelanggan' component={Pelanggan}/>
        <PrivateRoute exact path='/karyawan' component={Karyawan}/>
        <PrivateRoute exact path='/pemasok' component={Pemasok}/>
      </Switch>
  );
}

export default Routes;
