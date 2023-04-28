import React from 'react'

const Header = () => {

    const headerStyle ={
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2rem',
      marginBottom: '2rem',
      textTransform: 'uppercase',
      width:'fit-content',
    }
    return (
      <header className='ui fix menu'>
        <div className='ui container center' style={headerStyle}>
          <h2>Birthday Date Reminder</h2>
        </div>
      </header>
    )
  }

export default Header