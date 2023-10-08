import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/invoice/'

export async function getInvoiceFromApi(invoiceId) {
    try {
        const { data } = await axios.get(`${API_URL}id=${invoiceId}`);
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

        const { data } = await axios.put(`${API_URL}update/${invoice.id}`, requestData);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function getInvoicesFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }

}

export async function deleteInvoiceFromApi(invoiceId) {
    try {
        await axios.delete(`${API_URL}delete/${invoiceId}`);
    } catch (error) {
        console.log(error)
    }
}


export async function createInvoiceFromApi(userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { user: { id: userId } });
        return data;
    } catch (error) {
        console.log(error)
    }
}
