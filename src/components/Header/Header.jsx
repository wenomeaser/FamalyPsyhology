import React from 'react';
import HeaderNav from './components-header/Navbar/Header-nav';
import HeaderTexts from './components-header/Texts/Header-texts';
import HeaderRecord from './components-header/Record/Header-record';
import cl from "./Header.module.css";
const Header = () =>{
   return( <div>
    <header className={cl.header}>
    <HeaderNav/>
    <HeaderTexts/>
    <HeaderRecord/>
    </header>
    </div>
   )
}
export default Header;