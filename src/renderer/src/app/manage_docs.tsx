import '../styles/manage_docs.css'
// import Navbar from '@renderer/components/navbar'

function MDocuments(): JSX.Element {
  return (
    <div>
      <div className="container">
        <div className="col-1">
          <button className="button">Add a Document</button>
          <div className="rec">
            <p>Client Name</p>
            <h3>Juan Dela Cruz</h3>
            <p>Property Location</p>
            <h3>Property Name</h3>
            <p>Client Bank Name</p>
            <h3>BDO</h3>
            <p>Client Bank Address</p>
            <h3>Bank Address</h3>
            <p>Most Recent Document</p>
            <h3>Minutes of Auction Sale</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="row-1">
            <p className="title title1">Document No.</p>
            <p className="title">Document Type</p>
            <p className="title">Date of Submission</p>
            <p className="title">Status</p>
            <p className="title">Action</p>
          </div>
          <div className="card">
            <div className="row-1">
              <div className="card-capsule"></div>
              <div className="row-2">
                <p className="info doc-no">U052269606-R</p>
                <div className="mrd info">Tax Clearance</div>
                <p className="info date-sub">11/19/2023</p>
                <div className="status info">Missed</div>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MDocuments
