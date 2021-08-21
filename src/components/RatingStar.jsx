import React, { useState } from "react";
import {Rating} from "@material-ui/lab";
import Box from "@material-ui/core/Box";

const RatingStar = () => {
	const [value, setValue] = useState(2);
	return (
		<>
			<Box component='fieldset' border='none' fontSize='0.5rem'>
				<Rating
					name='simple-controlled'
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
			</Box>
		</>
	);
};

export default RatingStar;
