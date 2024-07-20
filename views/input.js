const FormTemplate = (e) => 
    `
      <!DOCTYPE html>
      <html>

        <head>
          <script
            src="https://unpkg.com/htmx.org@1.9.6"
            integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
            crossorigin="anonymous"
          ></script>
        </head>

        <body>

          <form>

            <ul>

              <li>
                <labe>commodity price</label>
                <input 
                 type="text"
                 name="entry"
                >
              </li>

              <li>
                <label>Take Profit</label>
                <input
                 type="text"
                 name="profit"
                >
                <span>%</span>
              </li>

              <li>
                <label>Stop Loss</label>
                <input 
                 type="text"
                 name="loss"
                >
                <span>%</span>
              </li>

              <button hx-post="/${e}" hx-swap="afterend">submit</button>
            </ul>

          </form>

        </body>

      </html>
    `

export default FormTemplate;