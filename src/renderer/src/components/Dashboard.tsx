// import React from 'react'

function Dashboard(): JSX.Element {
  return (
    <div className="container">
      <div className="column1">
        <button className="button">Export Data</button>
        <button className="button">Reports</button>
      </div>
      <div className="column1">
        <p className="title title1"> Client Name </p>
        <p className="title">Property Location </p>
        <p className="title"> Document No. </p>
        <p className="title">Most Recent Document </p>
        <p className="title"> Date of Submission </p>
        <p className="title t-status">Status</p>
      </div>

      <div className="card">
        <div className="column1">
          <div className="card-capsule"></div>
          <div className="column2">
            <p className="info c-name"> Jose Reyes </p>
            <p className="info p-loc">Property Location </p>
            <p className="info doc-no"> U052345606-R </p>
            <div className="mrd info">Tax Clearance</div>
            <p className="info date-sub"> 10/9/2023 </p>
            <div className="status info">Missed</div>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
