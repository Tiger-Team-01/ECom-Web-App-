const GetProduct = () => {
	return (dispatch) => {
		fetch(
			"https://v1.nocodeapi.com/name/airtable/yMQkQDczBBItwLlY?tableName=products",
		)
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "GET_PRODUCTS",
					payload: data.records,
				});
			});
	};
};
//    `https://v1.nocodeapi.com/oneman/airtable/mWCBUcUIFvfQWAsC?tableName=products`
const GetProductDetails = (id) => {
	return (dispatch) => {
		fetch(
			`https://v1.nocodeapi.com/name/airtable/yMQkQDczBBItwLlY?tableName=products&id=${id}`,
		)
			.then((res) => res.json())
			.then((datas) => {
				dispatch({
					type: "GET_PRODUCT_DETAILS",
					payload: datas.fields,
				});
			});
	};
};

const AddtoCart = (item, qty) => {
	return {
		type: "ADDTO_CART",
		payload: { item, qty },
	};
};

const RemovefromCart = (id) => {
	return {
		type: "REMOVEFROM_CART",
		payload: id,
	};
};

const ClearCart = () => {
	return {
		type: "CLEAR_CART",
	};
};

export { GetProductDetails, GetProduct, AddtoCart, RemovefromCart, ClearCart };
