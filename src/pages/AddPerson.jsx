import { useState } from "react"

const AddPerson = () => {

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
  return (
    <div className="ui main">
        <form className="ui form">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={person.name} onChange={handleChange} />
            </div>
        </form>
    </div>
  )
}

export default AddPerson