import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import api from './api/contact'
import {v4 as uuidv4} from 'uuid'
import AddPerson from './pages/AddPerson'
import BirthdayList from './pages/BirthdayList'
import SharedLayout from './pages/SharedLayout'
import EditPerson from './pages/EditPerson'


const App = () => {
  const [user, setUser] = useState([])
// const [user, setUser] = useState(() async => {
//   // const savedata = JSON.parse(localStorage.getItem('users'))
//   // return savedata
// })

const fetchData = async () => {
  const resp = await api.get('/contacts')
  return resp
}

const addPerson = async (person) => {
  const request = {
    id: uuidv4(), 
    ...person
  }

  const resp = await api.post('/contacts', request)
  setUser([...user, resp.data])
}

const deletePerson = async (id) => {
  await api.delete(`/contacts/${id}`)
  const newPerson = user.filter((person) => person.id !== id)
  setUser(newPerson)
} 


useEffect(() => {
  const retrivedata = async () =>{
    const allContacts = await fetchData()
    if(allContacts) setUser(allContacts.data)
  }
  retrivedata()
})

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(user))
}, [user])

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<BirthdayList user={user} deletePerson={deletePerson}/>} />
          <Route path='/addperson' element={<AddPerson addPerson={addPerson} />} />
          <Route path='/edit' element={<EditPerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App