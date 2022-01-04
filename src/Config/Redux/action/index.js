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
    GET_STOCK_OPNAME,
    GET_STOCK_OPNAME_SUCCESS,
    GET_STOCK_OPNAME_FAIL,
    GET_KARYAWAN,
    GET_KARYAWAN_SUCCESS,
    GET_KARYAWAN_FAIL,
    GET_DETAIL_PESANAN,
    GET_DETAIL_PESANAN_FAIL,
    GET_DETAIL_PESANAN_SUCCESS
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

