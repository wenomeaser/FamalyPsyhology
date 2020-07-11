import React from 'react';
import HeaderNav from './compomemts-header/Header-nav';
import HeaderTexts from './compomemts-header/Header-texts';
import HeaderRecord from './compomemts-header/Header-record';
const Header = () =>{
   return( <div>
    <header className='header'>
    <HeaderNav/>
    <HeaderTexts/>
    <HeaderRecord/>
    </header>
    </div>
   )
}
export default Header;