import React from 'react'
const Person = ({person}) => {
  /*
  wierd error where it says the id isn't unique, but it is...
  I thought the component might be re-rendering created duplicates,
  but that doesn't seem to be the case?
  Because you can't add duplicate names it should be impossible to
  have redundant keys, I haven't been able to figure out what is
  wrong
  */
  return(
    <li>
      {person.name} {person.number}
    </li>
  )
}
export default Person