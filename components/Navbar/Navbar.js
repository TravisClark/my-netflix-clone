import React, {useEffect, useState} from 'react'
import Container from '../UI/Container'
import logo from '../../assets/netflix_official_logo_icon_168085.png'
import Image from 'next/image'
import classes from './Navbar.module.css'

function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false)
  console.log(globalThis)
  useEffect(() => {
    globalThis.addEventListener('scroll', () => {
      globalThis.scrollY > 10 ? setChangeNavColor(true) : setChangeNavColor(false)
    })
    console.log(changeNavColor)
  }, [changeNavColor]);
  
  
  return (
    <nav>
        <Container className={`${changeNavColor && classes.navbar} flex justify-between min-w-full py-6 px-14 h-max fixed z-20 transition duration-300`}>
            <Image src={logo} width={108} height={50} objectFit='contain' alt=""/>
            <div className="flex space-x-4 self-center">
                <button className="py-1 px-4 bg-mainColor rounded-md h-fit whitespace-nowrap text-white hover:bg-hoverColor transition duration-300">Sign In</button>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar