import React from 'react';
import HeaderNav from './compomemts-header/Header-nav';
import HeaderTexts from './compomemts-header/Header-texts';
import HeaderRecord from './compomemts-header/Header-record';
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