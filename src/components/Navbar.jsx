import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
             <li>
                <NavLink to='/'>Главная</NavLink>
            </li>
            <li>
                <NavLink to='/beer'>Пиво</NavLink>
            </li>
            <li>
                <NavLink to='/ale'>Эль</NavLink>
            </li>
            <li>
                <NavLink to='/sydr'>Сидр</NavLink>
            </li>
            <li>
                <NavLink to='/snacks'>Снеки</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;