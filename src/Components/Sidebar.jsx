import React from 'react';
import './Sidebar.css';
import Trevo from '../Assets/icon_trevo.svg';

const Sidebar = () => {
  return (
    <>
      <div className="corpo_side_bar">
        <ul>
          <h5 className="mb-4">MENU</h5>
          <a href=""> <li> <img src={Trevo} alt="" /> Nova funcionalidade - Em breve </li> </a>
          <a href=""> <li> <img src={Trevo} alt="" /> Nova funcionalidade - Em breve</li> </a>
          <a href=""> <li> <img src={Trevo} alt="" /> Nova funcionalidade - Em breve</li> </a>
          <a href=""> <li> <img src={Trevo} alt="" /> Nova funcionalidade - Em breve</li> </a>
          <a href=""> <li> <img src={Trevo} alt="" /> Nova funcionalidade - Em breve</li> </a>
        </ul>
      </div>
    </>
  )
}

export default Sidebar