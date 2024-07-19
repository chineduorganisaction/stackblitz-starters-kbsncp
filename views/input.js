const FormTemplate = (e) => 
    `
      <!DOCTYPE html>
      <html>

        <head></head>

        <body>

          <form>

            <ul>

              <li>
                <labe>commodity price</label>
                <input 
                 type='text'
                 name='entry'
                />
              </li>

              <li>
                <label>Take Profit</label>
                <input 
                 type='text'
                 name=profit'
                />
                <span>%</span>
              </li>

              <li>
                <label>Stop Loss</label>
                <input 
                 type='text'
                 name='loss'
                />
                <span>%</span>
              </li>

              <button hx-get='/${e}' hx-swap='afterend' hx-target='form'>submit</button>
            </ul>

          </form>

        </body>

      </html>
    `

export default FormTemplate;