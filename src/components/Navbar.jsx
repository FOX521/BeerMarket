import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='header__navigation'>
             <li>
                <NavLink className='header__navigation-item' to='/' >Главная</NavLink>
            </li>
            <li>
                <NavLink className='header__navigation-item' to='/beer'>Пиво</NavLink>
            </li>
            <li>
                <NavLink className='header__navigation-item' to='/ale'>Эль</NavLink>
            </li>
            <li>
                <NavLink className='header__navigation-item' to='/sydr'>Сидр</NavLink>
            </li>
            <li>
                <NavLink className='header__navigation-item' to='/snacks'>Снеки</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;