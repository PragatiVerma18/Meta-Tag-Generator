import React from 'react';

function Optional(props) {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<>
			<div className='field'>
				<label className='label'>
					Search engines should revisit this page after
				</label>
				<div className='control'>
					<input className='input' type='text' placeholder='e.g 5 days' />
				</div>
			</div>
			<div className='field'>
				<label className='label'>Author</label>
				<div className='control'>
					<input className='input' type='text' placeholder='e.g Alex Smith' />
				</div>
			</div>
			<div className='button is-success' type='submit'>
				Generate Meta Tags
			</div>
		</>
	);
}

export default Optional;
