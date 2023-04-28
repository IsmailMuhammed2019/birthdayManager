import React from 'react'
import BirthdayCard from './BirthdayCard'


const BirthdayList = ({user, deletePerson}) => {
const handleClick = (id) => {
    deletePerson(id)
}

  return (
    <div className="ui celled list">
        <h2 style={{marginTop: '2rem'}}>List of Pending Birthdays</h2>
        {user.map((person) => {
            
            return (
                <BirthdayCard key={person.id} person={person} handleClick={handleClick}/>
            )
        })}
    </div>
  )
}

export default BirthdayList