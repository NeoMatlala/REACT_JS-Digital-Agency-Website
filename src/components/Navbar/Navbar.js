import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements.js'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from '../../globalStyles'
import {IconContext} from 'react-icons/lib'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [button, setButton] = useState(true)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // closing mobile menu
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return(
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <NavIcon />MOKONE
                        </NavLogo>

                        <MobileIcon onClick={handleClick}
                        >
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}> 
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>

                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}