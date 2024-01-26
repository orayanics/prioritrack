import '../styles/manage_clients.css'
import Navbar from '@renderer/components/navbar'

function Clients(): JSX.Element {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <div className="column1">
          <button className="button">Add a Client</button>
        </div>
        <div className="column1">
          <p className="title title1"> Client Name </p>
          <p className="title">Property Location </p>
          <p className="title"> Client Bank Name </p>
          <p className="title"> Client Bank Address </p>
          <p className="title t-status">Status</p>
        </div>

        <div className="card">
          <div className="column1">
            <div className="card-capsule"></div>
            <div className="column2">
              <p className="info c-name"> Jose Reyes </p>
              <p className="info p-loc">Property Location </p>
              <p className="info doc-no"> U052345606-R </p>
              <p className="info date-sub"> 10/9/2023 </p>
              <div className="status info">Missed</div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
