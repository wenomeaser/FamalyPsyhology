import React from 'react';
import cl from './Header-nav.module.css';
const HeaderNav = () =>{
   return( 
    <div className={cl.nav}><a href=''>
        Главная
      </a>
      <a href=''>
        О себе
      </a>
      <a href=''>
        Услуги
      </a>
      <a href=''>
        Отзывы
      </a>
      <a href=''>
        Контакты
      </a>
      </div>

   )
}
export default HeaderNav;