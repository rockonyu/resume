const Layout: (any) => string = ({ title, body, description, styles }) => `
  <!doctype html>
  <html ⚡>
    <head>
      <meta charset="utf-8">
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <title>${title}</title>
      <link rel="canonical" href="http://rockonyu.github.io/resume">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <meta name="description" content="${description}">
      <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Person"
        }
      </script>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Layout;
