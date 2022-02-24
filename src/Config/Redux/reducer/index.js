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
  DELETE_PEMBELIAN,
  DELETE_PEMBELIAN_SUCCESS,
  DELETE_PEMBELIAN_FAIL,
  POST_STOCK_OPNAME,
  POST_STOCK_OPNAME_SUCCESSS,
  POST_STOCK_OPNAME_FAIL,
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
        getDetailPesanan: {
          loading: false,
          error: false,
          data: [],
        },
        getStockOpname: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardBiaya: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardBiayaPembelian: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardJumlahCustomer: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardJumlahProduct: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardJumlahSupplier: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardKeuntungan: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardPembelian: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardPendapatan: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardPenjualan: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardStockOffice: {
          loading: false,
          error: false,
          data: [],
        },
        getDashboardStockStore: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterAksesoris: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterKategori: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterProduk: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterProject: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterTipe: {
          loading: false,
          error: false,
          data: [],
        },
        getMasterukuran: {
          loading: false,
          error: false,
          data: [],
        },
        deletePembelian: {
          loading: false,
          error: false,
          data: {},
        },
        addStockOpname:{
          loading: false,
          error: false,
          data: {},
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
                case DELETE_PEMBELIAN:
                return {
                  ...state,
                  deletePembelian: { ...state.deletePembelian, loading: true, error: false },
                };
              case DELETE_PEMBELIAN_SUCCESS:
                return {
                  ...state,
                  deletePembelian: {
                    ...state.deletePembelian,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DELETE_PEMBELIAN_FAIL:
                return {
                  ...state,
                  deletePembelian: { ...state.deletePembelian, loading: false, error: action.payload },
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
                case POST_STOCK_OPNAME:
                  return {
                    ...state,
                    addStockOpname: { ...state.addStockOpname, loading: true, error: false },
                  };
                case POST_STOCK_OPNAME_SUCCESSS:
                  return {
                    ...state,
                    addStockOpname: {
                      ...state.addStockOpname,
                      loading: false,
                      error: false,
                      data: action.payload,
                    },
                  };
                case POST_STOCK_OPNAME_FAIL:
                  return {
                    ...state,
                    addStockOpname: { ...state.addStockOpname, loading: false, error: action.payload },
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
                case DASHBOARD_BIAYA:
                return {
                  ...state,
                  getDashboardBiaya: { ...state.getDashboardBiaya, loading: true, error: false },
                };
              case DASHBOARD_BIAYA_SUCCESS:
                return {
                  ...state,
                  getDashboardBiaya: {
                    ...state.getDashboardBiaya,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_BIAYA_FAIL:
                return {
                  ...state,
                  getDashboardBiaya: { ...state.getDashboardBiaya, loading: false, error: action.payload },
                };
                case DASHBOARD_BIAYA_PEMBELIAN:
                return {
                  ...state,
                  getDashboardBiayaPembelian: { ...state.getDashboardBiayaPembelian, loading: true, error: false },
                };
              case DASHBOARD_BIAYA_PEMBELIAN_SUCCESS:
                return {
                  ...state,
                  getDashboardBiayaPembelian: {
                    ...state.getDashboardBiayaPembelian,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_BIAYA_PEMBELIAN_FAIL:
                return {
                  ...state,
                  getDashboardBiayaPembelian: { ...state.getDashboardBiayaPembelian, loading: false, error: action.payload },
                };
                case DASHBOARD_BIAYA_JUMLAH_CUSTOMER:
                return {
                  ...state,
                  getDashboardJumlahCustomer: { ...state.getDashboardJumlahCustomer, loading: true, error: false },
                };
              case DASHBOARD_BIAYA_JUMLAH_CUSTOMER_SUCCESS:
                return {
                  ...state,
                  getDashboardJumlahCustomer: {
                    ...state.getDashboardJumlahCustomer,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_BIAYA_JUMLAH_CUSTOMER_FAIL:
                return {
                  ...state,
                  getDashboardJumlahCustomer: { ...state.getDashboardJumlahCustomer, loading: false, error: action.payload },
                };
                case DASHBOARD_BIAYA_JUMLAH_PRODUCT:
                return {
                  ...state,
                  getDashboardJumlahProduct: { ...state.getDashboardJumlahProduct, loading: true, error: false },
                };
              case DASHBOARD_BIAYA_JUMLAH_PRODUCT_SUCCESS:
                return {
                  ...state,
                  getDashboardJumlahProduct: {
                    ...state.getDashboardJumlahProduct,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_BIAYA_JUMLAH_PRODUCT_FAIL:
                return {
                  ...state,
                  getDashboardJumlahProduct: { ...state.getDashboardJumlahProduct, loading: false, error: action.payload },
                };
                case DASHBOARD_BIAYA_JUMLAH_SUPPLIER:
                return {
                  ...state,
                  getDashboardJumlahSupplier: { ...state.getDashboardJumlahSupplier, loading: true, error: false },
                };
              case DASHBOARD_BIAYA_JUMLAH_SUPPLIER_SUCCESS:
                return {
                  ...state,
                  getDashboardJumlahSupplier: {
                    ...state.getDashboardJumlahSupplier,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_BIAYA_JUMLAH_SUPPLIER_FAIL:
                return {
                  ...state,
                  getDashboardJumlahSupplier: { ...state.getDashboardJumlahSupplier, loading: false, error: action.payload },
                };
                case DASHBOARD_KEUNTUNGAN:
                return {
                  ...state,
                  getDashboardKeuntungan: { ...state.getDashboardKeuntungan, loading: true, error: false },
                };
              case DASHBOARD_KEUNTUNGAN_SUCCESS:
                return {
                  ...state,
                  getDashboardKeuntungan: {
                    ...state.getDashboardKeuntungan,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_KEUNTUNGAN_FAIL:
                return {
                  ...state,
                  getDashboardKeuntungan: { ...state.getDashboardKeuntungan, loading: false, error: action.payload },
                };
                case DASHBOARD_PEMBELIAN:
                return {
                  ...state,
                  getDashboardPembelian: { ...state.getDashboardPembelian, loading: true, error: false },
                };
              case DASHBOARD_PEMBELIAN_SUCCESS:
                return {
                  ...state,
                  getDashboardPembelian: {
                    ...state.getDashboardPembelian,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_PEMBELIAN_FAIL:
                return {
                  ...state,
                  getDashboardPembelian: { ...state.getDashboardPembelian, loading: false, error: action.payload },
                };
                case DASHBOARD_PENDAPATAN:
                return {
                  ...state,
                  getDashboardPendapatan: { ...state.getDashboardPendapatan, loading: true, error: false },
                };
              case DASHBOARD_PENDAPATAN_SUCCESS:
                return {
                  ...state,
                  getDashboardPendapatan: {
                    ...state.getDashboardPendapatan,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_PENDAPATAN_FAIL:
                return {
                  ...state,
                  getDashboardPendapatan: { ...state.getDashboardPendapatan, loading: false, error: action.payload },
                };
                case DASHBOARD_PENJUALAN:
                return {
                  ...state,
                  getDashboardPenjualan: { ...state.getDashboardPenjualan, loading: true, error: false },
                };
              case DASHBOARD_PENJUALAN_SUCCESS:
                return {
                  ...state,
                  getDashboardPenjualan: {
                    ...state.getDashboardPenjualan,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_PENJUALAN_FAIL:
                return {
                  ...state,
                  getDashboardPenjualan: { ...state.getDashboardPenjualan, loading: false, error: action.payload },
                };
                case DASHBOARD_STOCK_OFFICE:
                return {
                  ...state,
                  getDashboardStockOffice: { ...state.getDashboardStockOffice, loading: true, error: false },
                };
              case DASHBOARD_STOCK_OFFICE_SUCCESS:
                return {
                  ...state,
                  getDashboardStockOffice: {
                    ...state.getDashboardStockOffice,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_STOCK_OFFICE_FAIL:
                return {
                  ...state,
                  getDashboardStockOffice: { ...state.getDashboardStockOffice, loading: false, error: action.payload },
                };
                case DASHBOARD_STOCK_STORE:
                return {
                  ...state,
                  getDashboardStockStore: { ...state.getDashboardStockStore, loading: true, error: false },
                };
              case DASHBOARD_STOCK_STORE_SUCCESS:
                return {
                  ...state,
                  getDashboardStockStore: {
                    ...state.getDashboardStockStore,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case DASHBOARD_STOCK_STORE_FAIL:
                return {
                  ...state,
                  getDashboardStockStore: { ...state.getDashboardStockStore, loading: false, error: action.payload },
                };
                case GET_MASTER_AKSESORIS:
                return {
                  ...state,
                  getMasterAksesoris: { ...state.getMasterAksesoris, loading: true, error: false },
                };
              case GET_MASTER_AKSESORIS_SUCCESS:
                return {
                  ...state,
                  getMasterAksesoris: {
                    ...state.getMasterAksesoris,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_AKSESORIS_FAIL:
                return {
                  ...state,
                  getMasterAksesoris: { ...state.getMasterAksesoris, loading: false, error: action.payload },
                };
                case GET_MASTER_KATEGORI:
                return {
                  ...state,
                  getMasterKategori: { ...state.getMasterKategori, loading: true, error: false },
                };
              case GET_MASTER_KATEGORI_SUCCESS:
                return {
                  ...state,
                  getMasterKategori: {
                    ...state.getMasterKategori,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_KATEGORI_FAIL:
                return {
                  ...state,
                  getMasterKategori: { ...state.getMasterKategori, loading: false, error: action.payload },
                };
                case GET_MASTER_PRODUCT:
                return {
                  ...state,
                  getMasterProduk: { ...state.getMasterProduk, loading: true, error: false },
                };
              case GET_MASTER_PRODUCT_SUCCESS:
                return {
                  ...state,
                  getMasterProduk: {
                    ...state.getMasterProduk,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_PRODUCT_FAIL:
                return {
                  ...state,
                  getMasterProduk: { ...state.getMasterProduk, loading: false, error: action.payload },
                };
                case GET_MASTER_PROJECT:
                return {
                  ...state,
                  getMasterProject: { ...state.getMasterProject, loading: true, error: false },
                };
              case GET_MASTER_PROJECT_SUCCESS:
                return {
                  ...state,
                  getMasterProject: {
                    ...state.getMasterProject,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_PROJECT_FAIL:
                return {
                  ...state,
                  getMasterProject: { ...state.getMasterProject, loading: false, error: action.payload },
                };
                case GET_MASTER_TIPE:
                return {
                  ...state,
                  getMasterTipe: { ...state.getMasterTipe, loading: true, error: false },
                };
              case GET_MASTER_TIPE_SUCCESS:
                return {
                  ...state,
                  getMasterTipe: {
                    ...state.getMasterTipe,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_TIPE_FAIL:
                return {
                  ...state,
                  getMasterTipe: { ...state.getMasterTipe, loading: false, error: action.payload },
                };
                case GET_MASTER_UKURAN:
                return {
                  ...state,
                  getMasterukuran: { ...state.getMasterukuran, loading: true, error: false },
                };
              case GET_MASTER_UKURAN_SUCCESS:
                return {
                  ...state,
                  getMasterukuran: {
                    ...state.getMasterukuran,
                    loading: false,
                    error: false,
                    data: action.payload,
                  },
                };
              case GET_MASTER_UKURAN_FAIL:
                return {
                  ...state,
                  getMasterukuran: { ...state.getMasterukuran, loading: false, error: action.payload },
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