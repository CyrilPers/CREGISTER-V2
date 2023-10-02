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

export async function editInvoiceFromApi(invoice, newCustomer, newProduct) {
    console.log("newproduct", newProduct)
    try {
        const requestData = {
            createdAt: invoice.createdAt,
            user: { id: invoice.user.id },
            total: 12
        };

        if (newCustomer) {
            requestData.customer = { id: newCustomer.id };
        }

        if (newProduct) {
            requestData.invoiceLines = [
                {
                    ...newProduct,
                    invoice: { id: invoice.id }
                }
            ]
        }

        const { data } = await axios.put(`${API_URL}update/${invoice.id}`, requestData);
        const basketProduct = data.invoiceLines[0]
        console.log("data", data)
        return basketProduct;
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
