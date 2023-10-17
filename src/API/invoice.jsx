import axios from 'axios'

const API_URL = ''

export async function getInvoiceFromApi(invoiceId) {
    try {
        const { data } = await axios.get(`${API_URL}id=${invoiceId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPdfFromApi(invoiceId) {
    try {
        const { data } = await axios.get(`${API_URL}createPdf/${invoiceId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function editInvoiceFromApi(invoice, newCustomer, basketUpdated) {
    try {
        const requestData = {
            createdAt: invoice.createdAt,
            user: { id: invoice.user.id },
            total: 0
        };

        if (newCustomer) {
            requestData.customer = { id: newCustomer.id };
        }

        if (basketUpdated) {
            requestData.invoiceLines = basketUpdated
        }

        const { data } = await axios.put(`${API_URL}update/${invoice.id}`, requestData, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function getInvoicesFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }

}

export async function deleteInvoiceFromApi(invoiceId) {
    try {
        await axios.delete(`${API_URL}delete/${invoiceId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}


export async function createInvoiceFromApi(userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { user: { id: userId } }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}
