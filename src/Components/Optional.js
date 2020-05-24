import React from 'react';

function Optional(props) {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<>
			<div class='field'>
				<label class='label'>
					Search engines should revisit this page after
				</label>
				<div class='control'>
					<input class='input' type='text' placeholder='e.g 5 days' />
				</div>
			</div>
			<div class='field'>
				<label class='label'>Author</label>
				<div class='control'>
					<input class='input' type='text' placeholder='e.g Alex Smith' />
				</div>
			</div>
		</>
	);
}

export default Optional;
