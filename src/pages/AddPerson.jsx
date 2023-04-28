import { useState } from "react"

const AddPerson = ({addPerson}) => {

    const [person, setPerson] = useState({name: '', email:'', date:''})

    const handleChange = (e) => {
        const {name, type, value, checked} =  e.target
        setPerson((prev) => {
            return {
                ...prev, 
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!person.name || !person.email || !person.date) {
            return alert('Please input valid information ')
        }
        addPerson(person)
        setPerson({name:'', email: '', date: ''})
    }
  return (
    <div className="ui main">
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' value={person.name} onChange={handleChange} />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' value={person.email} onChange={handleChange} />
            </div>
            <div className="field">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id='date' value={person.date} onChange={handleChange} />
            </div>
            <button className="ui button green">Add Birthday Date</button>
        </form>
    </div>
  )
}

export default AddPerson