import React from 'react'


const BirthdayList = ({user}) => {
    const {id, name, email, date} = user
  return (
    <div className="ui celled list">
        <div className="ui item" style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div className="content">
                <h3 className="header">
                    Name: {name}
                </h3>
                <p className='header'>
                    Email: {email}
                </p>
                <p className='header'>
                    Birthday Date: {date}
                </p>
            </div>
        </div>
    </div>
  )
}

export default BirthdayList