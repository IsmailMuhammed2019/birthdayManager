import React from 'react'
import BirthdayCard from './BirthdayCard'


const BirthdayList = ({user, deletePerson}) => {
const handleClick = (id) => {
    deletePerson(id)
}

  return (
    <div className="ui celled list">
        {user.map((person) => {
            
            return (
                <BirthdayCard key={person.id} person={person} handleClick={handleClick}/>
            )
        })}
    </div>
  )
}

export default BirthdayList