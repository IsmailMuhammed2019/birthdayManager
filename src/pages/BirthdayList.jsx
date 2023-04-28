import { NavLink } from 'react-router-dom'
import BirthdayCard from './BirthdayCard'


const BirthdayList = ({user, deletePerson}) => {
const handleClick = (id) => {
    deletePerson(id)
}

  return (
    <div className="ui container celled list" >
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
        <h2 style={{marginTop: '2rem'}}>List of Pending Birthdays</h2>
        <NavLink to='/addperson' className="ui button green">Add Birthday</NavLink>
        </div>
        {user.map((person) => {
            
            return (
                <BirthdayCard key={person.id} person={person} handleClick={handleClick}/>
            )
        })}
    </div>
  )
}

export default BirthdayList
