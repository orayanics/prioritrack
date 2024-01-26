import '../styles/changepass.css'

function ChangePass(): JSX.Element {
  return (
    <body>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <center>
              <h2>Change Password</h2>
            </center>
            <form>
              <label htmlFor="newpass">New Password</label>
              <input type="password" id="" name="" required />

              <label htmlFor="confirmpass">Confirm Password</label>
              <input type="password" id="" name="" required />

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
      </div>
    </body>
  )
}

export default ChangePass
