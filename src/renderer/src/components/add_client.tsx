// import React from 'react'
import '../styles/add_client.css'

function AddClient(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Add a Client</h1>
        <form>
          <h3 className="input_title">Client Name</h3>
          <input className="input" name="query" />
          <h3 className="input_title">Property Location</h3>
          <input className="input" name="query" /> <h3 className="input_title">Client Bank Name</h3>
          <input className="input" name="query" />
          <h3 className="input_title">Client Bank Address</h3>
          <input className="input" name="query" />
        </form>

        <div className="btn2">
          <button className="btn submit" type="submit">
            Submit
          </button>
          <button className="btn cancel ">Cancel</button>
          {/* btn2 */}
        </div>
      </div>
    </div>
  )
}

export default AddClient
