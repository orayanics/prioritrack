import '../styles/add_docu.css'

function AddDoc(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Add a Document</h1>
        <form>
          <h3 className="input_title">Document No.</h3>
          <input className="input" name="query" />

          <h3 className="input_title">Document Type</h3>
          <input className="input" name="query" />

          <h3 className="input_title">Date of Submission</h3>
          <input type="date" name="query" />

          <h3 className="input_title">Status</h3>
          <select id="status" name="status" className="select_status">
            <option value="Missed"></option>
            <option value="Missed">Missed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Complete">Complete</option>
            <option value="On Hold">On Hold</option>
          </select>
        </form>

        <div className="btn2">
          <button className="btn submit" type="submit">
            Submit
          </button>
          <button className="btn cancel">Cancel</button>
        </div>
      </div>{' '}
    </div>
  )
}

export default AddDoc
