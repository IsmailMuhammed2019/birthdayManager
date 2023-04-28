import React from 'react'
import Header from './pages/Header'
import AddPerson from './pages/AddPerson'

const App = () => {
  return (
    <div>
      <Header />
      <div className="ui container">
        <AddPerson />
      </div>
    </div>
  )
}

export default App