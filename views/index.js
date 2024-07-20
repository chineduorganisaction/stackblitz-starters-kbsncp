const HomePageTemplate = () => 
  `
    <!DOCTYPE html>
    <html>

      <head>

        <title>Trade Margin</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.6"
          integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
          crossorigin="anonymous"
        ></script>

      </head>

      <body>

        <div>
          <h1>TRADE MARGIN</h1>
        </div>

        <div class="btn">

          <button hx-get="/long-margin hx-swap=".btn">
            LONG
          </button>

          <button hx-get="/short-margin hx-swap=".btn">
            SHORT
          </button>

        </div>

      </body>
      
    </html>
  `

export default HomePageTemplate;