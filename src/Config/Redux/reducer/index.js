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
    GET_DETAIL_PESANAN_SUCCESS,
    GET_DETAIL_PESANAN_FAIL,
  }
    from '../ActionType'

    const initialState = {
        login: {
          loading: false,
          error: false,
          data: null,
        },
        getPenjualanStore: {
          loading: false,
          error: false,
          data: [],
        },
        getPembelian: {
          loading: false,
          error: false,
          data: [],
        },
        getPenjualanOffice: {
          loading: false,
          error: false,
          data: [],
        },
        getPenyimpananKeluar: {
          loading: false,
          error: false,
          data: [],
        },
        getPenyimpananMasuk: {
          loading: false,
          error: false,
          data: [],
        },
        getStockOpname: {
          loading: false,
          error: false,
          data: [],
        },
        getKaryawan: {
          loading: false,
          error: false,
          data: [],
        },
        getDetailPesanan: {
          loading: false,
          error: false,
          data: [],
        }
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOGIN:
                return {
                  ...state,
                  login: { ...state.login, loading: true, error: false },
                };
              case LOGIN_SUCCESS:
                return {
                  ...state,
                  login: {
                    ...state.login,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case LOGIN_FAIL:
                return {
                  ...state,
                  login: { ...state.login, loading: false, error: action.payload },
                };
                case GET_PENJUALAN_STORE:
                return {
                  ...state,
                  getPenjualanStore: { ...state.getPenjualanStore, loading: true, error: false },
                };
              case GET_PENJUALAN_STORE_SUCCESS:
                return {
                  ...state,
                  getPenjualanStore: {
                    ...state.getPenjualanStore,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_PENJUALAN_STORE_FAIL:
                return {
                  ...state,
                  getPenjualanStore: { ...state.getPenjualanStore, loading: false, error: action.payload },
                };
                case GET_PENJUALAN_OFFICE:
                return {
                  ...state,
                  getPenjualanOffice: { ...state.getPenjualanOffice, loading: true, error: false },
                };
              case GET_PENJUALAN_OFFICE_SUCCESS:
                return {
                  ...state,
                  getPenjualanOffice: {
                    ...state.getPenjualanOffice,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_PENJUALAN_OFFICE_FAIL:
                return {
                  ...state,
                  getPenjualanOffice: { ...state.getPenjualanOffice, loading: false, error: action.payload },
                };
                case GET_PEMBELIAN:
                return {
                  ...state,
                  getPembelian: { ...state.getPembelian, loading: true, error: false },
                };
              case GET_PEMBELIAN_SUCCESS:
                return {
                  ...state,
                  getPembelian: {
                    ...state.getPembelian,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_PEMBELIAN_FAIL:
                return {
                  ...state,
                  getPembelian: { ...state.getPembelian, loading: false, error: action.payload },
                };
                case GET_BARANG_KELUAR:
                return {
                  ...state,
                  getPenyimpananKeluar: { ...state.getPenyimpananKeluar, loading: true, error: false },
                };
              case GET_BARANG_KELUAR_SUCCESS:
                return {
                  ...state,
                  getPenyimpananKeluar: {
                    ...state.getPenyimpananKeluar,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_BARANG_KELUAR_FAIL:
                return {
                  ...state,
                  getPenyimpananKeluar: { ...state.getPenyimpananKeluar, loading: false, error: action.payload },
                };
                case GET_BARANG_MASUK:
                return {
                  ...state,
                  getPenyimpananMasuk: { ...state.getPenyimpananMasuk, loading: true, error: false },
                };
              case GET_BARANG_MASUK_SUCCESS:
                return {
                  ...state,
                  getPenyimpananMasuk: {
                    ...state.getPenyimpananMasuk,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_BARANG_MASUK_FAIL:
                return {
                  ...state,
                  getPenyimpananMasuk: { ...state.getPenyimpananMasuk, loading: false, error: action.payload },
                };
                case GET_STOCK_OPNAME:
                return {
                  ...state,
                  getStockOpname: { ...state.getStockOpname, loading: true, error: false },
                };
              case GET_STOCK_OPNAME_SUCCESS:
                return {
                  ...state,
                  getStockOpname: {
                    ...state.getStockOpname,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_STOCK_OPNAME_FAIL:
                return {
                  ...state,
                  getStockOpname: { ...state.getStockOpname, loading: false, error: action.payload },
                };
                case GET_KARYAWAN:
                return {
                  ...state,
                  getKaryawan: { ...state.getKaryawan, loading: true, error: false },
                };
              case GET_KARYAWAN_SUCCESS:
                return {
                  ...state,
                  getKaryawan: {
                    ...state.getKaryawan,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_KARYAWAN_FAIL:
                return {
                  ...state,
                  getKaryawan: { ...state.getKaryawan, loading: false, error: action.payload },
                };
                case GET_DETAIL_PESANAN:
                return {
                  ...state,
                  getDetailPesanan: { ...state.getDetailPesanan, loading: true, error: false },
                };
              case GET_DETAIL_PESANAN_SUCCESS:
                return {
                  ...state,
                  getDetailPesanan: {
                    ...state.getDetailPesanan,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_DETAIL_PESANAN_FAIL:
                return {
                  ...state,
                  getDetailPesanan: { ...state.getDetailPesanan, loading: false, error: action.payload },
                };
                default:
                    return state;
        }
    }
    export default reducer;