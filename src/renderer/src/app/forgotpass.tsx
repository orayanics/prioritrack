import '../styles/forgotpass.css'

function ForgotPass(): JSX.Element {
  return (
    <body>
      <div className="card-container">
        <div className="card">
          <center>
            <h2>Verification Questions</h2>
          </center>
          <form>
            <label htmlFor="1">1. When is your birthday?</label>
            <input type="text" id="" name="" required />

            <label htmlFor="q2">2. What is the name of your dog?</label>
            <input type="text" id="" name="" required />

            <label htmlFor="q3">3. What is your mothernrs maiden name?</label>
            <input type="text" id="" name="" required />

            <div className="button-container">
              <center>
                <button type="submit" className="verify-button">
                  Verify
                </button>
                <button type="submit" className="cancel-button">
                  Cancel
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}

export default ForgotPass
