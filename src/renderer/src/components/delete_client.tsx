// import React from 'react'
import '../styles/add_client.css'

function EditClient(): JSX.Element {
  return (
    <div className="card">
      <h1 className="title">Are you sure you want to delete?</h1>
      <form>
        <h3 className="input_title">Client Name</h3>
        <input className="input" name="query" disabled />
        <h3 className="input_title">Property Location</h3>
        <input className="input" name="query" disabled />
        <h3 className="input_title">Client Bank Name</h3>
        <input className="input" name="query" disabled />
        <h3 className="input_title">Client Bank Address</h3>
        <input className="input" name="query" disabled />
      </form>
      <div className="btn2">
        <button className="btn cancel" style={{ marginRight: '10px' }} type="submit">
          Delete
        </button>
        <button className="btn submit" style={{ marginRight: '10px' }}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default EditClient
