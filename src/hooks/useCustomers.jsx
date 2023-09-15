import { useState } from "react"

export const useCustomers = () => {
    const [customers, setCustomers] = useState([])

    return { customers, setCustomers }
}

