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
	getMasterProrject,
	getMasterTipe,
	getDetailPesanan
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

async function getPembelian(params) {
	// console.log('login')
	try {
		const url = `${BASE_URL}api/pembelian?${params}`;
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

async function getMasterProrject(params) {
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