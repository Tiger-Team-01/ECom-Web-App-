const GetProduct = (qty) => {
    return (dispatch) => {
        fetch(`https://fakestoreapi.com/products?limit=${qty}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: data,
                })
            })

    }
}
const GetProductDetails = (id) => {

    return (dispatch) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(datas => {
                dispatch({
                    type: "GET_PRODUCT_DETAILS",
                    payload: datas
                })
            })

    }
}

const AddtoCart = (item) => {
    return{
        type:"ADDTO_CART",
        payload:item,
    }
}

export { GetProductDetails, GetProduct ,AddtoCart}