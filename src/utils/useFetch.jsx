import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addDataInProductBucket } from "../store/productSlice"



const useFetch = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        setIsLoading(true)
        const result = await axios("https://swiggy-api.vercel.app/food").then((res) => {
            return res.data
        })

        await setProduct(result)
        dispatch(addDataInProductBucket(product))
        await setIsLoading(false)

    }

    useEffect(() => {

        fetchProducts()

    }, [])

    return (
        [product, isLoading]
    )
}


export default useFetch