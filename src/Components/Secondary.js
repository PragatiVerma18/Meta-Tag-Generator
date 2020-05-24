import React from 'react';

function Secondary(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<>
			<div className='control'>
				<label className='label'>Allow robots to index your website?</label>
				<div className='select'>
					<select>
						<option>Yes</option>
						<option>No</option>
					</select>
				</div>
			</div>
			<div className='control'>
				<label className='label'>
					What type of content will your site display?
				</label>
				<div className='control'>
					<input className='input' type='text' placeholder='UTF-8' />
				</div>
			</div>
			<div className='control'>
				<label className='label'>What is your site primary language?</label>
				<div className='control'>
					<input className='input' type='text' placeholder='English' />
				</div>
			</div>
		</>
	);
}

export default Secondary;
