// import Versions from './components/Versions'
// import icons from './assets/icons.svg'
// import React from 'react'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components
import NavBar from './components/navbar'
// import Dashboard from './components/Dashboard'
// import AddClient from './components/add_client'
// import DeleteClient from './components/delete_client'
// import EditClient from './components/edit_client'

// import ChangePass from './app/changepass'
// import ForgotPass from './app/forgotpass'
// import Clients from './app/manage_clients'
import AddDoc from './components/add_doc'
import EditClient from './components/edit_client'
import DeleteDoc from './components/delete_doc'
import MDocuments from './app/manage_docs'
function App(): JSX.Element {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Dashboard></Dashboard> */}
      {/* <AddClient></AddClient> */}
      {/* <DeleteClient></DeleteClient> */}
      {/* <EditClient></EditClient> */}

      {/* app yung location [??] */}
      {/* <ChangePass></ChangePass> */}
      {/* <ForgotPass></ForgotPass> */}
      {/* <Clients></Clients> */}
      {/* <MDocuments></MDocuments> */}
      {/* <AddDoc></AddDoc> */}
      {/* <EditClient></EditClient> */}
      <DeleteDoc></DeleteDoc>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Clients />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
