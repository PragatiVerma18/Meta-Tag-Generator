import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copy: false,
		};
	}

	copyCodeToClipboard = () => {
		const el = this.textArea;
		el.select();
		document.execCommand('copy');
		this.setState({
			copy: true,
		});
	};

	render() {
		const {
			handleClose,
			title,
			description,
			keywords,
			contentType,
			lang,
			seo,
			author,
			image,
			url,
		} = this.props;
		const meta = `
  <!-- Primary Meta Tags -->
  <title>${title}</title>
  <meta name="title" content="${title}">
  <meta name="description" content="${description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${url}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="${image}">
  
  <!-- Optional Meta Tags -->
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=${contentType}">
  <meta name="language" content="${lang}">
  <meta name="revisit-after" content="${seo} days">
  <meta name="author" content="${author}">`;
		return ReactDOM.createPortal(
			<div className='container meta'>
				<article className='message is-primary'>
					<div className='message-header'>
						<p className='is-size-4'>Meta Tags</p>
						<button
							className='delete is-large'
							aria-label='delete'
							onClick={handleClose}
						/>
					</div>
					<div className='message-body is-primary'>
						<textarea
							className='textarea'
							ref={(textarea) => (this.textArea = textarea)}
							value={`${meta}`}
							onClick={this.copyCodeToClipboard}>
							{meta}
						</textarea>
					</div>
					{this.state.copy ? (
						<button className='button is-success has-text-weight-bold copy'>
							Copied!!!
						</button>
					) : (
						<button
							className='button is-warning has-text-weight-bold copy'
							onClick={this.copyCodeToClipboard}>
							Copy To Clipboard
						</button>
					)}
				</article>
			</div>,
			document.getElementById('portal')
		);
	}
}

export default Modal;
