import axios from "axios"

export const getProduct = async () => {
    const response = await axios.get("http://localhost:8080/product")
    return response.data
}