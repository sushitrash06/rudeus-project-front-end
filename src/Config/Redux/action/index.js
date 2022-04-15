import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_PENJUALAN_STORE,
    GET_PENJUALAN_STORE_SUCCESS,
    GET_PENJUALAN_STORE_FAIL,
    GET_PENJUALAN_OFFICE,
    GET_PENJUALAN_OFFICE_SUCCESS,
    GET_PENJUALAN_OFFICE_FAIL,
    GET_PEMBELIAN,
    GET_PEMBELIAN_SUCCESS,
    GET_PEMBELIAN_FAIL,
    GET_BARANG_KELUAR,
    GET_BARANG_KELUAR_SUCCESS,
    GET_BARANG_KELUAR_FAIL,
    GET_BARANG_MASUK,
    GET_BARANG_MASUK_SUCCESS,
    GET_BARANG_MASUK_FAIL,
    POST_STOCK_OPNAME,
    POST_STOCK_OPNAME_SUCCESSS,
    POST_STOCK_OPNAME_FAIL,
    DELETE_PEMBELIAN,
  DELETE_PEMBELIAN_SUCCESS,
  DELETE_PEMBELIAN_FAIL,
    GET_STOCK_OPNAME,
    GET_STOCK_OPNAME_SUCCESS,
    GET_STOCK_OPNAME_FAIL,
    GET_KARYAWAN,
    GET_KARYAWAN_SUCCESS,
    GET_KARYAWAN_FAIL,
    GET_DETAIL_PESANAN,
    GET_DETAIL_PESANAN_FAIL,
    GET_DETAIL_PESANAN_SUCCESS,
    DASHBOARD_BIAYA,
    DASHBOARD_BIAYA_SUCCESS,
    DASHBOARD_BIAYA_FAIL,
    DASHBOARD_BIAYA_PEMBELIAN,
    DASHBOARD_BIAYA_PEMBELIAN_SUCCESS,
    DASHBOARD_BIAYA_PEMBELIAN_FAIL,
    DASHBOARD_BIAYA_JUMLAH_CUSTOMER,
    DASHBOARD_BIAYA_JUMLAH_CUSTOMER_SUCCESS,
    DASHBOARD_BIAYA_JUMLAH_CUSTOMER_FAIL,
    DASHBOARD_BIAYA_JUMLAH_PRODUCT,
    DASHBOARD_BIAYA_JUMLAH_PRODUCT_SUCCESS,
    DASHBOARD_BIAYA_JUMLAH_PRODUCT_FAIL,
    DASHBOARD_BIAYA_JUMLAH_SUPPLIER,
    DASHBOARD_BIAYA_JUMLAH_SUPPLIER_SUCCESS,
    DASHBOARD_BIAYA_JUMLAH_SUPPLIER_FAIL,
    DASHBOARD_KEUNTUNGAN,
    DASHBOARD_KEUNTUNGAN_SUCCESS,
    DASHBOARD_KEUNTUNGAN_FAIL,
    DASHBOARD_PEMBELIAN,
    DASHBOARD_PEMBELIAN_SUCCESS,
    DASHBOARD_PEMBELIAN_FAIL,
    DASHBOARD_PENDAPATAN,
    DASHBOARD_PENDAPATAN_SUCCESS,
    DASHBOARD_PENDAPATAN_FAIL,
    DASHBOARD_PENJUALAN,
    DASHBOARD_PENJUALAN_SUCCESS,
    DASHBOARD_PENJUALAN_FAIL,
    DASHBOARD_STOCK_OFFICE,
    DASHBOARD_STOCK_OFFICE_SUCCESS,
    DASHBOARD_STOCK_OFFICE_FAIL,
    DASHBOARD_STOCK_STORE,
    DASHBOARD_STOCK_STORE_SUCCESS,
    DASHBOARD_STOCK_STORE_FAIL,
    GET_MASTER_AKSESORIS,
    GET_MASTER_AKSESORIS_SUCCESS,
    GET_MASTER_AKSESORIS_FAIL,
    GET_MASTER_KATEGORI,
    GET_MASTER_KATEGORI_SUCCESS,
    GET_MASTER_KATEGORI_FAIL,
    GET_MASTER_PRODUCT,
    GET_MASTER_PRODUCT_SUCCESS,
    GET_MASTER_PRODUCT_FAIL,
    GET_MASTER_PROJECT,
    GET_MASTER_PROJECT_SUCCESS,
    GET_MASTER_PROJECT_FAIL,
    GET_MASTER_TIPE,
    GET_MASTER_TIPE_SUCCESS,
    GET_MASTER_TIPE_FAIL,
    GET_MASTER_UKURAN,
    GET_MASTER_UKURAN_SUCCESS,
    GET_MASTER_UKURAN_FAIL,
    GET_PELANGGAN,
    GET_PELANGGAN_FAIL,
    GET_PELANGGAN_SUCCESS,
    DELETE_PELANGGAN,
    DELETE_PELANGGAN_FAIL,
    DELETE_PELANGGAN_SUCCESS,
    POST_PELANGGAN,
    POST_PELANGGAN_FAIL,
    POST_PELANGGAN_SUCCESS,
    GET_PEMASOK,
    GET_PEMASOK_FAIL,
    GET_PEMASOK_SUCCESS,
    DELETE_PEMASOK,
    DELETE_PEMASOK_FAIL,
    DELETE_PEMASOK_SUCCESS,
    POST_PEMASOK,
    POST_PEMASOK_FAIL,
    POST_PEMASOK_SUCCESS,

} from '../ActionType'
import {api} from '../../Api/index';

const asyncLocalStorage = {
    setItem: async function (key, value) {
        await null;
        return localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await null;
        return localStorage.getItem(key);
    }
};

export const login = (payload) => dispatch => {
    dispatch({
        type: LOGIN
    });

    const request = api.login(payload);

    return request.then(
        response =>dispatch(loginSuccess(response)),
        err => dispatch(loginFail(err))
    );
};

export const loginSuccess = ({
    data
}) => dispatch => {
    return Promise.all([
        asyncLocalStorage.setItem('rd-prjt',JSON.stringify(data)),
        dispatch
    ])
    .then(dispatch => {
    // callback
    // console.log('login sukses')
    return dispatch[1]({
        type: LOGIN_SUCCESS,
        payload: data
    })
})
    // localStorage.setItem("DMDSHBTOKEN", JSON.stringify(data));
}

export const loginFail = (data) => dispatch => {
    return dispatch({
        type: LOGIN_FAIL,
        payload: data
    })
}

export const getPenjualanStore = (params) => dispatch => {
    dispatch({
        type: GET_PENJUALAN_STORE
    });

    const request = api.getPenjualanStore(params);
    return request.then(
        response =>dispatch(getPenjualanStoreSuccess(response)),
        err => dispatch(getPenjualanStoreFail(err))
    );
};

export const getPenjualanStoreSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_PENJUALAN_STORE_SUCCESS,
        payload: data
    })
}

export const getPenjualanStoreFail = (data) => dispatch => {
    return dispatch({
        type: GET_PENJUALAN_STORE_FAIL,
        payload: data
    })
}

export const getPenjualanOffice = (params) => dispatch => {
    dispatch({
        type: GET_PENJUALAN_OFFICE
    });

    const request = api.getPenjualanOffice(params);
    return request.then(
        response =>dispatch(getPenjualanOfficeSuccess(response)),
        err => dispatch(getPenjualanOfficeFail(err))
    );
};

export const getPenjualanOfficeSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_PENJUALAN_OFFICE_SUCCESS,
        payload: data
    })
}

export const getPenjualanOfficeFail = (data) => dispatch => {
    return dispatch({
        type: GET_PENJUALAN_OFFICE_FAIL,
        payload: data
    })
}

export const getPembelian = (params) => dispatch => {
    dispatch({
        type: GET_PEMBELIAN
    });

    const request = api.getPembelian(params);
    return request.then(
        response =>dispatch(getPembelianSuccess(response)),
        err => dispatch(getPembelianFail(err))
    );
};

export const getPembelianSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_PEMBELIAN_SUCCESS,
        payload: data
    })
}

export const getPembelianFail = (data) => dispatch => {
    return dispatch({
        type: GET_PEMBELIAN_FAIL,
        payload: data
    })
}

export const deletePembelian = (params) => dispatch => {
    dispatch({
        type: DELETE_PEMBELIAN
    });

    const request = api.deletePembelian(params);
    return request.then(
        response =>dispatch(deletePembelianSuccess(response)),
        err => dispatch(deletePembelianFail(err))
    );
};

export const deletePembelianSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DELETE_PEMBELIAN_SUCCESS,
        payload: data
    })
}

export const deletePembelianFail = (data) => dispatch => {
    return dispatch({
        type: DELETE_PEMBELIAN_FAIL,
        payload: data
    })
}

export const getPenyimpananKeluar = (params) => dispatch => {
    dispatch({
        type: GET_BARANG_KELUAR
    });

    const request = api.getPenyimpananKeluar(params);
    return request.then(
        response =>dispatch(getPenyimpananKeluarSuccess(response)),
        err => dispatch(getPenyimpananKeluarFail(err))
    );
};

export const getPenyimpananKeluarSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_BARANG_KELUAR_SUCCESS,
        payload: data
    })
}

export const getPenyimpananKeluarFail = (data) => dispatch => {
    return dispatch({
        type: GET_BARANG_KELUAR_FAIL,
        payload: data
    })
}

export const getPenyimpananMasuk = (params) => dispatch => {
    dispatch({
        type: GET_BARANG_MASUK
    });

    const request = api.getPenyimpananMasuk(params);
    return request.then(
        response =>dispatch(getPenyimpananMasukSuccess(response)),
        err => dispatch(getPenyimpananMasukFail(err))
    );
};

export const getPenyimpananMasukSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_BARANG_MASUK_SUCCESS,
        payload: data
    })
}

export const getPenyimpananMasukFail = (data) => dispatch => {
    return dispatch({
        type: GET_BARANG_MASUK_FAIL,
        payload: data
    })
}

export const addStockOpname = (params,data) => dispatch => {
    dispatch({
        type: POST_STOCK_OPNAME
    });

    const request = api.addStockOpname(params,data);
    return request.then(
        response =>dispatch(addStockOpnameSuccess(response)),
        err => dispatch(addStockOpnameFail(err))
    );
};

export const addStockOpnameSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: POST_STOCK_OPNAME_SUCCESSS,
        payload: data
    })
}

export const addStockOpnameFail = (data) => dispatch => {
    return dispatch({
        type: POST_STOCK_OPNAME_FAIL,
        payload: data
    })
}

export const getStockOpname = (params) => dispatch => {
    dispatch({
        type: GET_STOCK_OPNAME
    });

    const request = api.getStockOpname(params);
    return request.then(
        response =>dispatch(getStockOpnameSuccess(response)),
        err => dispatch(getStockOpnameFail(err))
    );
};

export const getStockOpnameSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_STOCK_OPNAME_SUCCESS,
        payload: data
    })
}

export const getStockOpnameFail = (data) => dispatch => {
    return dispatch({
        type: GET_STOCK_OPNAME_FAIL,
        payload: data
    })
}

export const getKaryawan = (params) => dispatch => {
    dispatch({
        type: GET_KARYAWAN
    });

    const request = api.getKaryawan(params);
    return request.then(
        response =>dispatch(getKaryawanSuccess(response)),
        err => dispatch(getKaryawanFail(err))
    );
};

export const getKaryawanSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_KARYAWAN_SUCCESS,
        payload: data
    })
}

export const getKaryawanFail = (data) => dispatch => {
    return dispatch({
        type: GET_KARYAWAN_FAIL,
        payload: data
    })
}

export const getDetailPesanan = (params) => dispatch => {
    dispatch({
        type: GET_DETAIL_PESANAN
    });

    const request = api.getDetailPesanan(params);
    return request.then(
        response =>dispatch(getDetailPesananSuccess(response)),
        err => dispatch(getDetailPesananFail(err))
    );
};

export const getDetailPesananSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_DETAIL_PESANAN_SUCCESS,
        payload: data
    })
}

export const getDetailPesananFail = (data) => dispatch => {
    return dispatch({
        type: GET_DETAIL_PESANAN_FAIL,
        payload: data
    })
}

export const getDashboardBiaya = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_BIAYA
    });

    const request = api.getDashboardBiaya(params);
    return request.then(
        response =>dispatch(getDashboardBiayaSuccess(response)),
        err => dispatch(getDashboardBiayaFail(err))
    );
};

export const getDashboardBiayaSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_SUCCESS,
        payload: data
    })
}

export const getDashboardBiayaFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_FAIL,
        payload: data
    })
}

export const getDashboardBiayaPembelian = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_BIAYA_PEMBELIAN
    });

    const request = api.getDashboardBiayaPembelian(params);
    return request.then(
        response =>dispatch(getDashboardBiayaPembelianSuccess(response)),
        err => dispatch(getDashboardBiayaPembelianFail(err))
    );
};

export const getDashboardBiayaPembelianSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_PEMBELIAN_SUCCESS,
        payload: data
    })
}

export const getDashboardBiayaPembelianFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_PEMBELIAN_FAIL,
        payload: data
    })
}

export const getDashboardJumlahCustomer = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_CUSTOMER
    });

    const request = api.getDashboardJumlahCustomer(params);
    return request.then(
        response =>dispatch(getDashboardJumlahCustomerSuccess(response)),
        err => dispatch(getDashboardJumlahCustomerFail(err))
    );
};

export const getDashboardJumlahCustomerSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_CUSTOMER_SUCCESS,
        payload: data
    })
}

export const getDashboardJumlahCustomerFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_CUSTOMER_FAIL,
        payload: data
    })
}

export const getDashboardJumlahProduct = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_PRODUCT
    });

    const request = api.getDashboardJumlahProduct(params);
    return request.then(
        response =>dispatch(getDashboardJumlahProductSuccess(response)),
        err => dispatch(getDashboardJumlahProductFail(err))
    );
};

export const getDashboardJumlahProductSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_PRODUCT_SUCCESS,
        payload: data
    })
}

export const getDashboardJumlahProductFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_PRODUCT_FAIL,
        payload: data
    })
}

export const getDashboardJumlahSupplier = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_SUPPLIER
    });

    const request = api.getDashboardJumlahSupplier(params);
    return request.then(
        response =>dispatch(getDashboardJumlahSupplierSuccess(response)),
        err => dispatch(getDashboardJumlahSupplierFail(err))
    );
};

export const getDashboardJumlahSupplierSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_SUPPLIER_SUCCESS,
        payload: data
    })
}

export const getDashboardJumlahSupplierFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_BIAYA_JUMLAH_SUPPLIER_FAIL,
        payload: data
    })
}

export const getDashboardKeuntungan = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_KEUNTUNGAN
    });

    const request = api.getDashboardKeuntungan(params);
    return request.then(
        response =>dispatch(getDashboardKeuntunganSuccess(response)),
        err => dispatch(getDashboardKeuntunganFail(err))
    );
};

export const getDashboardKeuntunganSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_KEUNTUNGAN_SUCCESS,
        payload: data
    })
}

export const getDashboardKeuntunganFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_KEUNTUNGAN_FAIL,
        payload: data
    })
}

export const getDashboardPembelian = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_PEMBELIAN
    });

    const request = api.getDashboardPembelian(params);
    return request.then(
        response =>dispatch(getDashboardPembelianSuccess(response)),
        err => dispatch(getDashboardPembelianFail(err))
    );
};

export const getDashboardPembelianSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_PEMBELIAN_SUCCESS,
        payload: data
    })
}

export const getDashboardPembelianFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_PEMBELIAN_FAIL,
        payload: data
    })
}

export const getDashboardPendapatan = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_PENDAPATAN
    });

    const request = api.getDashboardPendapatan(params);
    return request.then(
        response =>dispatch(getDashboardPendapatanSuccess(response)),
        err => dispatch(getDashboardPendapatanFail(err))
    );
};

export const getDashboardPendapatanSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_PENDAPATAN_SUCCESS,
        payload: data
    })
}

export const getDashboardPendapatanFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_PENDAPATAN_FAIL,
        payload: data
    })
}

export const getDashboardPenjualan = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_PENJUALAN
    });

    const request = api.getDashboardPenjualan(params);
    return request.then(
        response =>dispatch(getDashboardPenjualanSuccess(response)),
        err => dispatch(getDashboardPenjualanFail(err))
    );
};

export const getDashboardPenjualanSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_PENJUALAN_SUCCESS,
        payload: data
    })
}

export const getDashboardPenjualanFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_PENJUALAN_FAIL,
        payload: data
    })
}

export const getDashboardStockOffice = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_STOCK_OFFICE
    });

    const request = api.getDashboardStockOffice(params);
    return request.then(
        response =>dispatch(getDashboardStockOfficeSuccess(response)),
        err => dispatch(getDashboardStockOfficeFail(err))
    );
};

export const getDashboardStockOfficeSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_STOCK_OFFICE_SUCCESS,
        payload: data
    })
}

export const getDashboardStockOfficeFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_STOCK_OFFICE_FAIL,
        payload: data
    })
}

export const getDashboardStockStore = (params) => dispatch => {
    dispatch({
        type: DASHBOARD_STOCK_STORE
    });

    const request = api.getDashboardStockStore(params);
    return request.then(
        response =>dispatch(getDashboardStockStoreSuccess(response)),
        err => dispatch(getDashboardStockStoreFail(err))
    );
};

export const getDashboardStockStoreSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DASHBOARD_STOCK_STORE_SUCCESS,
        payload: data
    })
}

export const getDashboardStockStoreFail = (data) => dispatch => {
    return dispatch({
        type: DASHBOARD_STOCK_STORE_FAIL,
        payload: data
    })
}

export const getMasterAksesoris = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_AKSESORIS
    });

    const request = api.getMasterAksesoris(params);
    return request.then(
        response =>dispatch(getMasterAksesorisSuccess(response)),
        err => dispatch(getMasterAksesorisFail(err))
    );
};

export const getMasterAksesorisSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_AKSESORIS_SUCCESS,
        payload: data
    })
}

export const getMasterAksesorisFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_AKSESORIS_FAIL,
        payload: data
    })
}

export const getMasterKategori = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_KATEGORI
    });

    const request = api.getMasterKategori(params);
    return request.then(
        response =>dispatch(getMasterKategoriSuccess(response)),
        err => dispatch(getMasterKategoriFail(err))
    );
};

export const getMasterKategoriSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_KATEGORI_SUCCESS,
        payload: data
    })
}

export const getMasterKategoriFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_KATEGORI_FAIL,
        payload: data
    })
}

export const getMasterProduk = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_PRODUCT
    });

    const request = api.getMasterProduk(params);
    return request.then(
        response =>dispatch(getMasterProdukSuccess(response)),
        err => dispatch(getMasterProdukFail(err))
    );
};

export const getMasterProdukSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_PRODUCT_SUCCESS,
        payload: data
    })
}

export const getMasterProdukFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_PRODUCT_FAIL,
        payload: data
    })
}

export const getMasterProject = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_PROJECT
    });

    const request = api.getMasterProject(params);
    return request.then(
        response =>dispatch(getMasterProjectSuccess(response)),
        err => dispatch(getMasterProjectFail(err))
    );
};

export const getMasterProjectSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_PROJECT_SUCCESS,
        payload: data
    })
}

export const getMasterProjectFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_PROJECT_FAIL,
        payload: data
    })
}

export const getMasterTipe = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_TIPE
    });

    const request = api.getMasterTipe(params);
    return request.then(
        response =>dispatch(getMasterTipeSuccess(response)),
        err => dispatch(getMasterTipeFail(err))
    );
};

export const getMasterTipeSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_TIPE_SUCCESS,
        payload: data
    })
}

export const getMasterTipeFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_TIPE_FAIL,
        payload: data
    })
}

export const getMasterukuran = (params) => dispatch => {
    dispatch({
        type: GET_MASTER_UKURAN
    });

    const request = api.getMasterukuran(params);
    return request.then(
        response =>dispatch(getMasterukuranSuccess(response)),
        err => dispatch(getMasterukuranFail(err))
    );
};

export const getMasterukuranSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_MASTER_UKURAN_SUCCESS,
        payload: data
    })
}

export const getMasterukuranFail = (data) => dispatch => {
    return dispatch({
        type: GET_MASTER_UKURAN_FAIL,
        payload: data
    })
}

export const postPelanggan = (params) => dispatch => {
    dispatch({
        type: POST_PELANGGAN
    });

    const request = api.postPelanggan(params);
    return request.then(
        response =>dispatch(postPelangganSuccess(response)),
        err => dispatch(postPelangganFail(err))
    );
};

export const postPelangganSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: POST_PELANGGAN_SUCCESS,
        payload: data
    })
}

export const postPelangganFail = (data) => dispatch => {
    return dispatch({
        type: POST_PELANGGAN_FAIL,
        payload: data
    })
}

export const getPelanggan = (params) => dispatch => {
    dispatch({
        type: GET_PELANGGAN
    });

    const request = api.getPelanggan(params);
    return request.then(
        response =>dispatch(getPelangganSuccess(response)),
        err => dispatch(getPelangganFail(err))
    );
};

export const getPelangganSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_PELANGGAN_SUCCESS,
        payload: data
    })
}

export const getPelangganFail = (data) => dispatch => {
    return dispatch({
        type: GET_PELANGGAN_FAIL,
        payload: data
    })
}

export const deletePelanggan = (params) => dispatch => {
    dispatch({
        type: DELETE_PELANGGAN
    });

    const request = api.deletePelanggan(params);
    return request.then(
        response =>dispatch(deletePelangganSuccess(response)),
        err => dispatch(deletePelangganFail(err))
    );
};

export const deletePelangganSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DELETE_PELANGGAN_SUCCESS,
        payload: data
    })
}

export const deletePelangganFail = (data) => dispatch => {
    return dispatch({
        type: DELETE_PELANGGAN_FAIL,
        payload: data
    })
}


export const postPemasok = (params) => dispatch => {
    dispatch({
        type: POST_PEMASOK
    });

    const request = api.postPemasok(params);
    return request.then(
        response =>dispatch(postPemasokSuccess(response)),
        err => dispatch(postPemasokFail(err))
    );
};

export const postPemasokSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: POST_PEMASOK_SUCCESS,
        payload: data
    })
}

export const postPemasokFail = (data) => dispatch => {
    return dispatch({
        type: POST_PEMASOK_FAIL,
        payload: data
    })
}

export const getPemasok = (params) => dispatch => {
    dispatch({
        type: GET_PEMASOK
    });

    const request = api.getPemasok(params);
    return request.then(
        response =>dispatch(getPemasokSuccess(response)),
        err => dispatch(getPemasokFail(err))
    );
};

export const getPemasokSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: GET_PEMASOK_SUCCESS,
        payload: data
    })
}

export const getPemasokFail = (data) => dispatch => {
    return dispatch({
        type: GET_PEMASOK_FAIL,
        payload: data
    })
}

export const deletePemasok = (params) => dispatch => {
    dispatch({
        type: DELETE_PEMASOK
    });

    const request = api.deletePemasok(params);
    return request.then(
        response =>dispatch(deletePemasokSuccess(response)),
        err => dispatch(deletePemasokFail(err))
    );
};

export const deletePemasokSuccess = ({
    data
}) => dispatch => {
    return dispatch({
        type: DELETE_PEMASOK_SUCCESS,
        payload: data
    })
}

export const deletePemasokFail = (data) => dispatch => {
    return dispatch({
        type: DELETE_PEMASOK_FAIL,
        payload: data
    })
}




