import React from 'react'
import Container from '../UI/Container'

function Footer() {
  return (
    <footer id="footer">
      <Container className="flex flex-col space-y-4 py-20 px-4 bg-black min-w-full mt-2 text-gray-400 sm:px-20">
        <h3 className="text-xl">Questions? Contact us.</h3>
        <div className=""></div>
        <h3 className="text-xl">Netflix Vietnam.</h3>
      </Container>
    </footer>
  )
}

export default Footer