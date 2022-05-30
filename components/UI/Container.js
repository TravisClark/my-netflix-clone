import React from 'react'

function Container(props) {
  return (
    <div className={`${props.className} container mx-auto font-sans`}>
        {props.children}
    </div>
  )
}

export default Container