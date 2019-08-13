import React from 'react'

const profile = props => {
  return (
    <marquee
      scrollamount="35"
      style={{
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        position: 'relative',
        top: '95%',
        padding: 10,
        fontSize: 16
      }}
    >
      I'm a snek, catch me if you can{' '}
      <span role="img" aria-label="snek">
        🐍
      </span>
    </marquee>
  )
}

export default profile
