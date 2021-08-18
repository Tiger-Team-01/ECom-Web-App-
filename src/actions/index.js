const GetProduct = (qty) => {
    return (dispatch) => {
        fetch(
            `https://fakestoreapi.com/products?limit=${qty}`
        ).then(res => res.json())
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
    return {
        type: "ADDTO_CART",
        payload: item,
    }
}

const RemovefromCart = (id) => {
    return {
        type: "REMOVEFROM_CART",
        payload: id,
    }
}

const ClearCart=()=>{
    return{
        type:"CLEAR_CART"
    }
}
export { GetProductDetails, GetProduct, AddtoCart, RemovefromCart,ClearCart }