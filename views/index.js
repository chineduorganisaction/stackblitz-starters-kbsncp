const HomePageTemplate = () => {
  `
    <html>

      <head>

        <title>Trade Margin</title>
        <meta />

      </head>

      <body>

        <div>
          <h1>TRADE MARGIN</h1>
        </div>

        <div>

          <button hx-get="/long-margin">
            LONG
          </button>

          <button hx-get="/short-margin">
            SHORT
          </button>

        </div>

      </body>
      
    </html>
  `
}

module.exports = HomePageTemplate;