import React from 'react'

const BirthdayList = ({user}) => {
  return (
    <div className="ui celled list">
        <div className="ui item" style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div className="content">
                <h3 className="header">
                    Name: {name}
                </h3>
                <p>
                    Email: {email}
                </p>
                <p>
                    Date: {date}
                </p>
            </div>
        </div>
    </div>
  )
}

export default BirthdayList