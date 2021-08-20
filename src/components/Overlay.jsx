import React from "react";

const Overlay = () => {
	return (
		<div className='overlay'>
			<div className='overlay-background'>
				<div className='container d-flex justify-content-center align-items-center h-100'>
					<div>
						<h1 className='text-light mb-2'>End of Season Sale</h1>
						<p className='text-white mb-4'>
							Take 25% off all sweaters and knits. Discount applied at
							checkout.
						</p>
						<a href='/collections' className='btn btn-light'>
							shop now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
