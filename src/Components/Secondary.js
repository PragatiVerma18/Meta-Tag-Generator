import React from 'react';

function Secondary(props) {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<>
			<div class='control'>
				<label class='label'>Allow robots to index your website?</label>
				<div class='select'>
					<select>
						<option>Yes</option>
						<option>No</option>
					</select>
				</div>
			</div>
			<div class='control'>
				<label class='label'>
					What type of content will your site display?
				</label>
				<div class='select'>
					<select>
						<option>UTF-8</option>
					</select>
				</div>
			</div>
			<div class='control'>
				<label class='label'>What is your site primary language?</label>
				<div class='select'>
					<select>
						<option>English</option>
					</select>
				</div>
			</div>
		</>
	);
}

export default Secondary;
