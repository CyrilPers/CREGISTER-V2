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

export async function editInvoiceFromApi(invoice, newCustomer) {
    console.log("newCustomer", newCustomer)
    try {
        await axios.put(`${API_URL}update/${invoice.id}`, { createdAt: invoice.createdAt, user: { id: invoice.user.id }, customer: { newCustomer } });
    } catch (error) {
        console.log(error)
    }
}
