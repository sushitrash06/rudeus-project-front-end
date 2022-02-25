import axios from 'axios';
// import { BASE_URL } from '../env/index';
export const api = {
	login,
	getPenjualanStore,
	getPenjualanOffice,
	getPembelian,
	getPenyimpananKeluar,
	getPenyimpananMasuk,
	getStockOpname,
	getKaryawan,
	getPelanggan,
	getMasterAksesoris,
	getMasterKategori,
	getMasterProduk,
	getMasterProject,
	getMasterTipe,
	getMasterukuran,
	getStockOpname,
	getDetailPesanan,
	getAkuntansiKeuangan,
	getPemasok,
	postPemasok,
	searchPemasok,
	deletePemasok,
	importPemasok,
	updatePemasok,
	deletePemasok,
	getPelanggan,
	postPelanggan,
	searchPelanggan,
	deletePelanggan,
	importPelanggan,
	updatePelanggan,
	deletePelanggan,
	getAkuntansiLabaRugi,
	getDashboardBiaya,
	getDashboardBiayaPembelian,
	getDashboardJumlahCustomer,
	getDashboardJumlahProduct,
	getDashboardJumlahSupplier,
	getDashboardKeuntungan,
	getDashboardPembelian,
	getDashboardPendapatan,
	getDashboardPenjualan,
	getDashboardStockOffice,
	getDashboardStockStore,
	getJurnal,
	getJurnalUmum,
	getKaryawan,
	deleteDetailPesanan,
	deleteKaryawan,
	deletePenyimpananKeluar,
	deleteMasterKategori,
	deleteMasterAksesoris,
	deleteMasterProduk,
	deleteMasterProject,
	deleteMasterTipe,
	deleteMasteroffice,
	deleteMasterstore,
	deletePenjualanOffice,
	deletePenjualanStore,
	deletePenyimpananKeluar,
	deletePenyimpananMasuk,
	deleteStockOpname,
	addPenjualanStore,
	searchPenjualanStore,
	updatePenjualanStore,
	addPenjualanOffice,
	searchPenjualanOffice,
	updatePenjualanOffice,
	addPenyimpananKeluar,
	searchPenyimpananKeluar,
	updatePenyimpananKeluar,
	addStockOpname,
	searchPenyimpananMasuk,
	updatePenyimpananMasuk,
	searchStockOpname,
	updateStockOpname,
	searchMasterKategori,
	updateMasterKategori,
	addMasterAksesoris,
	searchMasterAksesoris,
	addMasterProduk,
	dropdownMasterProduk,
	importMasterProduk,
	searchMasterProduk,
	updateMasterProduk,
	addMasterTipe,
	searchMasterTipe,
	updateMasterTipe,
	addMasterProject,
	searchMasterProject,
	updateMasterProject,
	searchDetailPesanan,
	updateDetailPesanan,
	addJurnal,
	addKaryawan,
	karyawanImport,
	karyawanSearch,
	updateKaryawan,
	addMasterukuran,
	addMasteroffice,
	searchMasteroffice,
	updateMasteroffice,
	addMasterstore,
	searchMasterstore,
	updateMasterstore,
	deletePembelian

}

const storedCreds = JSON.parse(localStorage.getItem("rd-prjt"));
const token = storedCreds?.token;
const BASE_URL = 'http://localhost:8282/'
// console.log(token,'ini token di awal')
// function clearStoredCreds() {
// 	localStorage.removeItem("rd-prjt");
// }
console.log(token)

const defaultHeaders = {
	'Content-Type': 'application/json',
	'Authorization':'Bearer '+ token
};
const defaultHeadersPost = {
	'Content-Type': 'multipart/form-data',
	'Authorization':'Bearer '+ token
};
// console.log('lalalalala')
async function login(data) {
	// console.log('login')
	try {
		const url = `${BASE_URL}api/auth/login`;
		const headers = defaultHeaders;
		const response = await axios({
			method: 'POST',
			url,
			data,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getPenjualanStore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}store/penjualan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addPenjualanStore(params,data) {
	// console.log('login')
	try {
		const url = `${BASE_URL}store/add?${params}`;
		const headers = {
			...defaultHeadersPost
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
			data
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deletePenjualanStore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}store/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchPenjualanStore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}store/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updatePenjualanStore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}store/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getPenjualanOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}office/penjualan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addPenjualanOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}office/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deletePenjualanOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}office/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchPenjualanOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}office/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updatePenjualanOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}office/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getPembelian(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pembelian/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deletePembelian(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pembelian/deletePembelian?id=${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getPenyimpananKeluar(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananKeluar/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addPenyimpananKeluar(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananKeluar/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deletePenyimpananKeluar(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananKeluar/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchPenyimpananKeluar(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananKeluar/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updatePenyimpananKeluar(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananKeluar/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getPenyimpananMasuk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananMasuk/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deletePenyimpananMasuk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananMasuk/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchPenyimpananMasuk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananMasuk/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updatePenyimpananMasuk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}penyimpananMasuk/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getStockOpname(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}stockOpname/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addStockOpname(params,data) {
	// console.log('login')
	try {
		const url = `${BASE_URL}stockOpname/${params}`;
		const headers = {
			...defaultHeadersPost
		};
		const response = await axios({
			method: 'POST',
			url,
			data,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deleteStockOpname(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}stockOpname/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function searchStockOpname(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}stockOpname/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updateStockOpname(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}stockOpname/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getKaryawan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getPelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deleteMasterKategori(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/kategori/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasterKategori(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/kategori/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateMasterKategori(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/kategori/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getMasterKategori(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/kategori/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getMasterAksesoris(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/aksesoris/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addMasterAksesoris(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/aksesoris/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteMasterAksesoris(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/aksesoris/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasterAksesoris(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/aksesoris/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deleteMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function dropdownMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/dropdown?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function importMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/import?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function searchMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updateMasterProduk(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/product/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}




async function getMasterTipe(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/tipe/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addMasterTipe(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/tipe/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteMasterTipe(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/tipe/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasterTipe(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/tipe/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateMasterTipe(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/tipe/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getMasterProject(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/project/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addMasterProject(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/project/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteMasterProject(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/project/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasterProject(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/project/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateMasterProject(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/project/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDetailPesanan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}detailPesanan/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getDashboardBiaya(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/biaya?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardBiayaPembelian(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/biayaPembelian?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardJumlahCustomer(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/jmlCustomer?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardJumlahProduct(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/jmlProduct?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardJumlahSupplier(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/jmlSupplier?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardKeuntungan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/keuntungan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardPembelian(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/pembelian?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardPendapatan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/pendapatan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardPenjualan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/penjualan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardStockOffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/stockOffice?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getDashboardStockStore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}dashboard/stockStore?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addDetailPesanan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}detailPesanan/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteDetailPesanan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}detailPesanan/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchDetailPesanan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}detailPesanan/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateDetailPesanan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}detailPesanan/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addJurnal(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}akuntansi/journal/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getJurnal(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}akuntansi/journal/bukuBesar?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function getJurnalUmum(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}akuntansi/journal/journalUmum?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addKaryawan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteKaryawan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function karyawanImport(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/import?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function karyawanSearch(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updateKaryawan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}karyawan/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getMasterukuran(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/ukuran/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addMasterukuran(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/office/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function addMasteroffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/office/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteMasteroffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/office/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasteroffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/office/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateMasteroffice(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/office/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function addMasterstore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/store/add?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function deleteMasterstore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/store/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function searchMasterstore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/store/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}
async function updateMasterstore(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}master/store/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getAkuntansiLabaRugi(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}akuntansi/labaRugi?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getAkuntansiKeuangan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}akuntansi/keuangan?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function getPemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function postPemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/all?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deletePemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function downloadPemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/download?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function importPemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/import?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function searchPemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updatePemasok(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pemasok/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}


async function postPelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function deletePelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/delete?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function downloadPelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/download?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function importPelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/import?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'POST',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function searchPelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/search?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}

async function updatePelanggan(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}pelanggan/update?${params}`;
		const headers = {
			...defaultHeaders
		};
		const response = await axios({
			method: 'GET',
			url,
			headers,
		});
		return response;
	} catch (error) {
		if (error.response.status === 401) {
			//clearStoredCreds();
		}
		return Promise.reject(error.response);
	}
}



