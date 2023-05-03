import { NavLink } from "react-router-dom"

const BirthdayCard = ({person, handleClick, updatePerson}) => {
    const { id, name, email, date} = person
  return (
    <div className="ui item" style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div className="content" style={{width:'90%'}}>
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
            <NavLink to='/edit'>
            <i className="edit alternate outline icon blue" style={{cursor: 'pointer'}} onClick={() => updatePerson(id)}/>
            </NavLink>
            <i className="trash alternate outline icon red" style={{cursor: 'pointer'}}  onClick={() => handleClick(id)}/>
        </div>
  )
}

export default BirthdayCard