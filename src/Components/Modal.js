import React from "react";
import ReactDOM from "react-dom";

function Modal({
  handleClose,
  title,
  description,
  keywords,
  allowRobots,
  contentType,
  lang,
  seo,
  author
}) {
  const meta = `<!-- Primary Meta Tags -->
  <title>${title}</title>
  <meta name="title" content="${title}">
  <meta name="description" content="${description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="">
  
  <!-- Optional Meta Tags -->
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=${contentType}">
  <meta name="language" content="${lang}">
  <meta name="revisit-after" content="${seo} days">
  <meta name="author" content="${author}">`;

  return ReactDOM.createPortal(
    <div className="container box">
      <article className="message is-primary">
        <div className="message-header">
          <p>Meta Tags</p>
          <button
            className="delete"
            aria-label="delete"
            onClick={handleClose}
          />
        </div>
        <div className="message-body">
          <pre>{meta}</pre>
        </div>
      </article>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
