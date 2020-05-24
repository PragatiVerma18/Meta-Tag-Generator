import React from 'react';

function Basic(props) {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<>
			<div className='field'>
				<div className='control'>
					<label htmlFor='title' className='label'>
						Site Title
					</label>
					<input
						className='input'
						name='title'
						type='text'
						placeholder='Title must be within 70 characters'
						value={props.title}
						onChange={props.handleChange}
						required
					/>
				</div>
			</div>
			<div className='field'>
				<div className='control'>
					<label htmlFor='description' className='label'>
						Site Description
					</label>
					<input
						className='textarea'
						name='description'
						type='text'
						placeholder='Description must be within 150 characters'
						value={props.description}
						onChange={props.handleChange}
						required
					/>
				</div>
			</div>
			<div className='field'>
				<div className='control'>
					<label htmlFor='keywords' className='label'>
						Site Keywords (Separated with commas)
					</label>
					<input
						className='textarea'
						name='keywords'
						type='text'
						placeholder='keyword1, keyword2, keyword3'
						value={props.keywords}
						onChange={props.handleChange}
						required
					/>
				</div>
			</div>
		</>
	);
}

export default Basic;
