import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-lg text-primary font-normal font-jost list-none hover:text-secondery duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default List
