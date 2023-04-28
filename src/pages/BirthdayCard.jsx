import React from 'react'

const BirthdayCard = ({person, handleClick}) => {
    const { id, name, email, date} = person
  return (
    <div className="ui item" style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div className="content">
                <h3 className="header">
                    {name}
                </h3>
                <p className='header'>
                    {email}
                </p>
                <p className='header'>
                    {date}
                </p>
            </div>
            <i className="trash alternate outline icon red style={{cursor: 'pointer'}}"  onClick={() => handleClick(id)}/>
        </div>
  )
}

export default BirthdayCard